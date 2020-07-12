import Link from "next/link";
import Head from "next/head";

import { getAllBlogsIds, getBlogById } from "../../lib/blogs";
import Layout from "../../components/layout";

export async function getStaticPaths(data) {
  const paths = await getAllBlogsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(data) {
  const blogData = await getBlogById(data.params.id);
  return {
    props: {
      blogData,
    },
  };
}

export default ({ blogData }) => {
  return (
    <Layout>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <div>
        <Link href="/blogs">
          <a>{"<< Back"}</a>
        </Link>
        <h1>{blogData.title}</h1>
        <p>{blogData.body}</p>
      </div>
    </Layout>
  );
};
