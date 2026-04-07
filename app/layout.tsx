import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pekedli — Bar & Lounge | Veszprém",
  description:
    "Prémium gin bár és lounge Veszprém szívében. 30+ válogatott gin, signature koktélok, csapolt sörök. Foglalj asztalt egy felejthetetlen estéhez.",
  keywords:
    "gin bár, koktél bár, Veszprém, lounge, prémium italok, asztalfoglalás, Pekedli",
  openGraph: {
    title: "Pekedli — Bar & Lounge | Veszprém",
    description:
      "Ahol minden korty egy történet. 30+ prémium gin, signature koktélok.",
    type: "website",
    locale: "hu_HU",
    url: "https://pekedli.hu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body bg-primary text-text-primary antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
