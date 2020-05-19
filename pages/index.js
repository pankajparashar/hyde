import DefaultLayout from "../layouts/default"
import Link from "next/link";
import { config, getAllPosts } from "../api";

export default function Index( props ) {
    return (
        <DefaultLayout title={ props.title } description={ props.description }>
            <h1>List of posts</h1>
            <ul>
                {
                    props.posts.map(function(post, idx){
                        return (
                            <li key={idx}>
                                <Link href={post.slug}>
                                    <a>{post.title}</a>
                                </Link>
                            </li>)
                    })
                }
            </ul>
        </DefaultLayout>
    )
} 

export async function getStaticProps(context){
    return {
        props: {
            posts: getAllPosts(),
            title: config.title,
            description: config.description
        }
    }
}