import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});


export const metadata = {
  title: "Stella Di Mare | ستلا دي ماري",
  description:
    "A new dimension of coastal luxury at Stella Di Mare Sea View. Enjoy sea-view chalets, green landscapes, crystal pools, and world-class hospitality in Ain Sokhna. — بعد جديد من الفخامة الساحلية في ستلا دي ماري سي فيو. استمتع بشاليهات مطلة على البحر ومساحات خضراء هادئة ومسابح نقية وضيافة عالمية في قلب العين السخنة."
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${inter.variable}`}
    >
      <head />
      <body className="antialiased bg-white text-[#242424] font-cairo">
        {children}
      </body>
    </html>
  );
}
