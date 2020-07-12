import axios from "axios";

export async function getBlogs() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
}

export async function getAllBlogsIds() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data.map((item) => ({ params: { id: item.id.toString() } }));
}

export async function getBlogById(id) {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return res.data;
}
