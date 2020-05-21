import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'

export function getAllPosts(){
    const files = fs.readdirSync('_posts')
    const posts = files.map(function(file){
        const content = fs.readFileSync(path.join('_posts',file))
        const meta = matter(content)
        return {
            slug: file.replace('.md',''),
            title: meta.data.title
        }
    })
    return posts
}

export function getPostBySlug(slug){
    const filePath = path.join('_posts', slug+'.md')
    const fileContent = fs.readFileSync(filePath, 'utf-8' )
    const meta = matter(fileContent)
    const content = marked(meta.content)    
    return {
        title: meta.data.title, 
        content: content
    }
}

export const config = yaml.safeLoad( fs.readFileSync( 'config.yml', 'utf8' ) );