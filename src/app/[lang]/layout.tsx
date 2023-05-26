import "@/styles/tailwind.css";
import { Inter } from "next/font/google";
import { Providers } from "@/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dalan Capital",
  description: "Dalan capital",
};

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "fr" },
    { lang: "tr" },
    { lang: "de" },
    { lang: "fa" },
  ];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}