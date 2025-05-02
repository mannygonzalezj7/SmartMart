import type { AppProps } from "next/app";
import "../styles/app.css";
import "../styles/Header.css";
import "../styles/home.css";
import "../styles/tripPlanner.css";
import "../styles/grocery.css";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
