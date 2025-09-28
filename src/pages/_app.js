import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-screen min-h-screen bg-background dark:bg-black">
      <Component {...pageProps} />
    </div>
  );
}