import React  from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import style from '../static/Style';

function Layout(props){
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            {style}
            <Header header={props.header} title={props.title}></Header>
            {props.children}
            <Footer footer="copyright Yamahare"></Footer>
        </div>
    )
}

export default Layout;