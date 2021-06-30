import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
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
