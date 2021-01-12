import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getPostsByTags, getAllPosts } from '@api'

export default function Blog(props){
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <p>List of posts with tags {props.prettyTags}:</p>
            <ul>
                {props.posts.map(function(post, idx){
                    return (
                        <li key={idx.toString()}>
                            <Link href={'/post/'+post.slug}>
                                <a>{post.title}</a>
                            </Link>&nbsp;-&nbsp;
                            <ul>
                                {post.tags.map(function(tag, index){
                                    return (
                                        <li key={index}>
                                            <Link href={'/posts/'+tag}>
                                                <a>{tag}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </DefaultLayout>
    )
} 

export async function getStaticProps(context){
    const config = await getConfig()
    const postsByTags = await getPostsByTags(context.params.tags)

    return {
        props: {
            posts: postsByTags,
            title: config.title,
            description: config.description,
            prettyTags: context.params.tags.join(", ")
        }
    }
}

function permutations(array) {
    function p(array, temp) {
        var i, x;
        if (!array.length) {
            result.push(temp);
        }
        for (i = 0; i < array.length; i++) {
            x = array.splice(i, 1)[0];
            p(array, temp.concat(x));
            array.splice(i, 0, x);
        }
    }

    var result = [];
    p(array, []);
    return result;
}

export async function getStaticPaths(){
    let posts = await getAllPosts();
    let paths = [];
    posts.map(post => {
        let perms = permutations(post.tags);
        perms.map(perm => {
            paths.push({ params: { tags: perm } })
        });
    });
    return {
        paths: paths,
        fallback: false
    }
}