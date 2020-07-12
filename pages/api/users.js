import axios from "axios";

async function getUsers() {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
}

export default (req, res) => {
  return getUsers().then((users) => res.send(users));
};
