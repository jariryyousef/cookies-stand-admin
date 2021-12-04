import Head from "next/head";
import Header from "./Header";
import Main from "./main";
import Footer from "./Footer";
import React from "react";

export default function CookieStandAdmin(){


    return(

        <div>
      <Head>
        <title>Cookie Stand Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer/>

        </div>
    )
}