import { Inter } from "next/font/google";
import Header from "@/components/header";
import "../components/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Headless Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
