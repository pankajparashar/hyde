import DefaultLayout from './default'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout(props){
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <article>
                <h4><Link href='/'><a>Home</a></Link> | {props.title}</h4>
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
            </article>
        </DefaultLayout>
    )
}