import React from "react";
import NextDocument, { Html, Main, NextScript, Head } from "next/document";
import { ColorModeScript } from "@chakra-ui/color-mode";

export default class Document extends NextDocument {
  static getInitialProps(ctx: any) {
    return NextDocument.getInitialProps(ctx);
  }
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#da532c" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <link href="/favicon.ico" rel="shortcut icon" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <style>
            {`
      .prestyle {
        margin-top: 0 !important;
        width: 100%;
        border-bottom-left-radius: 13px;
        border-bottom-right-radius: 13px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        box-shadow: var(--chakra-shadows-2xl) !important;
      }
      .slick-dots li button:before {
        font-size: 10px;
        transition: font-size cubic-bezier(0.18, 0.89, 0.32, 1.28) .5s;
      }
      .slick-dots li.slick-active button:before {
        font-size: 14px;
      }
      .chakra-ui-dark .slick-dots li button:before {
        color:white;
      }
      `}
          </style>
        </Head>
        <body>
          <Main />
          <ColorModeScript />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"
            type="text/javascript"
          ></script>
        </body>
      </Html>
    );
  }
}
