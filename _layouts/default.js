import Head from 'next/Head'
import Header from '../_includes/header'
import Footer from '../_includes/footer'

export default function DefaultLayout(props){
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width'/>
                <title>{props.title}</title>
                <meta name='description' content={props.description}/>
            </Head>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}