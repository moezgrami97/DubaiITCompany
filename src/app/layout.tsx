import "../app/styles/bootstrap.min.css";
import "../app/styles/boxicons.min.css";
import "../app/styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../app/styles/style.css";
import "../app/styles/responsive.css";

import AosAnimation from "@/components/Layouts/AosAnimation";
import { Nunito } from "next/font/google";

import { Analytics } from "@vercel/analytics/next"

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AlberoIT - Web Development, Marketing & Security Solutions",
  description: "Your IT Solutions Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        <Analytics/>
        <AosAnimation />
      </body>
    </html>
  );
}
