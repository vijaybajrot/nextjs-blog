import { getAllBlogsIds } from "../../../lib/blogs";

export default (req, res) => {
  getAllBlogsIds().then((ids) =>
    res.send(ids.map((item) => parseInt(item.params.id)))
  );
};
