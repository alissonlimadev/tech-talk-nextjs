import "@/styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`flex min-h-screen w-screen flex-col ${inter.className} bg-gray-100`}
    >
      <Component {...pageProps} />
    </div>
  );
}
