import axios from "axios";
export function getData() {
  return axios.get("http://localhost:4000/data").then(res => res.data);
}
