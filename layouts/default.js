import Head from "next/Head"
import Header from "../includes/header"
import Footer from "../includes/footer"

export default function DefaultLayout( props ) {
    return (
        <section>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{ props.title }</title>
                <meta name="Description" content={ props.description }></meta>
            </Head>
            <Header/>
            { props.children }
            <Footer/>
        </section>
    )
}