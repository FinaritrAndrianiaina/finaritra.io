import { NextSeoProps } from "next-seo";

export const defaultSeoData: NextSeoProps = {
  title: "Finaritra Andrianiaina - Developer",
  description: "Gameur, Nodejs développeur, web-3.0 développeur et plus...",
  openGraph: {
    title: "Finaritra Andrianiaina - Developer",
    description: "Gameur, Nodejs développeur, web-3.0 développeur et plus...",
    url: "https://finaritra.me",
    locale: "fr/FR",
    site_name: "finaritra.me",
    images: [
      {
        url: "https://finaritra.me/img/og.jpeg",
        width: 1024,
        alt: "description-img",
      },
    ],
    profile: {
      firstName: "Finaritra",
      lastName: "Andrianiaina",
      gender: "male",
      username: "FinaritrAndrianiaina",
    },
    article: {
      authors: ["Finaritra ANDRIANIAINA"],
      tags: ["Finaritra", "Developper", "Dévéloppeur", "React JS"],
    },
    type: "website",
  },
  twitter: {
    cardType: "summary",
    handle: "@finaritraio",
    site: "finaritra.me",
  },
  canonical: "https://finaritra.me",
  defaultTitle: "Finaritra Andrianiaina - Developer",
};
