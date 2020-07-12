import Head from "next/head";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-page">
        <h3>Hi, My name is Vijay Bajrot, I am a fullstack Developer.</h3>
        <p>You can find me on twitter and instagram by below links.</p>
        <li>
          <a href="https://twitter.com/vijaybajrot07" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/vijaybajrot07/" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://github.com/vijaybajrot/" target="_blank">
            Github
          </a>
        </li>
        <p>This simple website is developed in next js.</p>
      </div>
      <style jsx>
        {`
          .home-page {
            margin: 1.5rem 0;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
