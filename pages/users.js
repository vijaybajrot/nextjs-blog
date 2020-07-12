import axios from "axios";
import Layout from "../components/layout";

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/users");
  return {
    props: {
      users: data,
    },
  };
}

export default ({ users }) => {
  return (
    <Layout>
      <h2>Users (Getting Data by getServerSideProps)</h2>

      <pre>{JSON.stringify(users, null, 1)}</pre>
    </Layout>
  );
};
