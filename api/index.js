import fs from "fs";
import path from "path";
import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'

export function getAllPosts(){
    const files = fs.readdirSync( 'posts' )
    const posts = files.map( function(file){
        const fileContent = fs.readFileSync( path.join( "posts", file ) )
        const meta = matter( fileContent )

        return {
            slug: file.replace( ".md", "" ),
            title: meta.data.title
        }
    })
    return posts
}

export function getPostBySlug(slug){
    const postContent = fs.readFileSync( path.join("posts", slug + ".md"), 'utf-8' )
    const meta = matter(postContent)
    const content = marked(meta.content)    
    
    return {
        title: meta.data.title, 
        content: content
    }
}

export const config = yaml.safeLoad( fs.readFileSync( 'config.yml', 'utf8' ) );