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
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
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
        </body>
      </Html>
    );
  }
}
