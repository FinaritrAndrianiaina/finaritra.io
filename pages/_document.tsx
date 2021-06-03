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
          <style>
            {`
      .prestyle {
        margin-top: 0 !important;
        width: 100%;
        border-bottom-left-radius: 13px;
        border-bottom-right-radius: 13px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        box-shadow: "#252525 3px 11px 20px 0px";
      }
      `}
          </style>
        </Head>
        <body>
          <Main />
          <ColorModeScript />
          <NextScript />
        </body>
      </Html>
    );
  }
}
