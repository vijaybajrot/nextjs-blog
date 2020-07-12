import Link from "next/link";
import Head from "next/head";

import { getBlogs } from "../../lib/blogs";
import Layout from "../../components/layout";

export async function getStaticProps() {
  const allBlogs = await getBlogs();
  return {
    props: {
      allBlogs,
    },
  };
}

export default ({ allBlogs }) => {
  return (
    <Layout>
      <Head>
        <title>Blogs</title>
      </Head>
      <div>
        {allBlogs.map((blog) => {
          return (
            <div key={blog.id}>
              <Link href="/posts/[id]" as={`blogs/${blog.id}`}>
                <a>
                  <h3>{blog.title}</h3>
                </a>
              </Link>
              <p>{blog.body}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
