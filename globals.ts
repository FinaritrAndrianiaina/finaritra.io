import { NextSeoProps } from "next-seo";

export const defaultSeoData: NextSeoProps = {
  title: "Finaritra Andrianiaina - Developer",
  description: "Gameur, Nodejs développeur, web-3.0 développeur et plus...",
  openGraph: {
    title: "Finaritra Andrianiaina - Developer",
    description: "Gameur, Nodejs développeur, web-3.0 développeur et plus...",
    url: "https://finaritra.vercel.app",
    locale: "fr/FR",
    site_name: "Finaritra Andrianiaina",
    images: [
      {
        url: "https://finaritra.vercel.app/img/og.jpeg",
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
  },
  canonical: "https://finaritra.vercel.app",
  defaultTitle: "Finaritra Andrianiaina - Developer",
};
