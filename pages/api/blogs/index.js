import { getBlogs } from "../../../lib/blogs";

export default (req, res) => {
  getBlogs().then((data) => {
    res.json({ data });
  });
};
