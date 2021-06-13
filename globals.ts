import { NextSeoProps } from "next-seo";

export const defaultSeoData: NextSeoProps = {
  title: "Finaritra Haritiana ANDRIANIAINA - Developer",
  description:
    "Nodejs & Typescript fullstack développeur, web-3.0 développeur et plus...",
  openGraph: {
    title: "Finaritra Haritiana Andrianiaina - Developer",
    description: "Gameur, Nodejs développeur, web-3.0 développeur et plus...",
    url: "https://finaritra.me",
    locale: "fr_FR",
    site_name: "finaritra.me",
    images: [
      {
        url: "https://finaritra.me/img/og.jpeg",
        width: 1024,
        alt: "[Finaritra Haritiana Andrianiaina Blog]",
      },
    ],
    profile: {
      firstName: "Finaritra",
      lastName: "Andrianiaina",
      gender: "male",
      username: "FinaritrAndrianiaina",
    },
    article: {
      authors: ["Finaritra Haritiana ANDRIANIAINA"],
      tags: ["Finaritra", "Developper", "Dévéloppeur", "React JS"],
    },
    type: "website",
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@finaritrame",
    site: "finaritra.me",
  },
  canonical: "https://finaritra.me",
  defaultTitle: "Finaritra Haritiana ANDRIANIAINA - Developer",
};
