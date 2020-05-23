import Head from 'next/head'
import Header from '../_includes/header'
import Footer from '../_includes/footer'

export default function DefaultLayout(props){
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={props.description}/>
                <link rel='stylesheet' href='/style.css'/>
            </Head>
            <Header/>
            {props.children}
            <Footer/>
        </main>
    )
}