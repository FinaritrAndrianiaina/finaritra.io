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
