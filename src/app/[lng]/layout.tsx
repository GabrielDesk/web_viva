import type { Metadata } from "next";
import { Sora } from "next/font/google";
import localfont from "next/font/local";
import "../../../globals.css";
import i18next, { dir } from "i18next";
import { languages } from "../../../i18n/settings";

const sora = Sora({ subsets: ["latin"] });

const clash = localfont({
  src: [
    {
      path: "../../../public/fonts/ClashDisplayBold.otf",
      weight: "700",
    },
    {
      path: "../../../public/fonts/ClashDisplaySemibold.otf",
      weight: "600",
    },
    {
      path: "../../../public/fonts/ClashDisplayMedium.otf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/ClashDisplayRegular.otf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/ClashDisplayLight.otf",
      weight: "300",
    },
    {
      path: "../../../public/fonts/ClashDisplayExtralight.otf",
      weight: "200",
    },
  ],
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "Viva boa vista!",
  description: "Since 2019",
  icons: "/favicon.ico",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface IParamsType {
  lng: string;
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: IParamsType;
}) {
  return (
    <html lang={lng}>
      {/* <html lang={lng} dir={dir(lng)}> */}
      <head>
        <body className={`${clash.variable}`}>{children}</body>
      </head>
    </html>
  );
}
