import "../../static/main.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/img/favicon.png" />
        <title>Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
