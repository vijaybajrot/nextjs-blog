import { getBlogById } from "../../../lib/blogs";

export default (req, res) => {
  const {
    query: { id },
  } = req;

  getBlogById(id).then((data) => {
    res.send(data);
  });
};
