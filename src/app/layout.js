import { Yatra_One } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const yatra = Yatra_One({ weight: ['400'],subsets: ["latin"] });

export const metadata = {
  title: "Anthony David - Portfolio",
  description: "my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yatra.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
