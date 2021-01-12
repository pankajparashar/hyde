import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout(props){
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <article>
                <h1>{props.title}</h1>
                <ul>
                    {props.tags.map(function(tag, index){
                        return (
                            <li key={index}>
                                <Link href={'/posts/'+tag}>
                                    <a>{tag}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
                <div><Link href='/'><a>Home</a></Link></div> 
            </article>
        </DefaultLayout>
    )
}