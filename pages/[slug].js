import PostLayout from '../layouts/post'
import { getPostBySlug, getAllPosts } from "../api"

export default function Post( props ){
    return (
        <PostLayout title={props.title} content={props.content}/>
    )
}

export async function getStaticProps( context ){
    return {
        props: getPostBySlug( context.params.slug )
    }
}

export async function getStaticPaths(){
    const paths = getAllPosts().map(post => ({
        params: { slug: post.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}