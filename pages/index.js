import DefaultLayout from '../_layouts/default'
import Link from 'next/link';
import { config, getAllPosts } from '../api';

export default function Blog(props){
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <h1>List of posts:</h1>
            <ul>
                {props.posts.map(function(post, idx){
                    return (
                        <li key={idx}>
                            <Link href={'/posts/'+post.slug}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </DefaultLayout>
    )
} 

export async function getStaticProps(){
    return {
        props: {
            posts: getAllPosts(),
            title: config.title,
            description: config.description
        }
    }
}