import "src/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>JsonPlaceHolder Album</title>
        <meta
          name="description"
          content="Fetch data from jsonplaceholder album"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
