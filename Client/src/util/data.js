import axios from "axios";

export function getFormatDate(inputDate) {
  const date = new Date(inputDate);
  return date.toISOString().split(".")[0].split("T").join(" ");
}

export function getAllData() {
  return axios.get("http://localhost:4000/data").then(res => res.data);
}
export function getTypeScript() {
  return axios.get("http://localhost:4000/typescript").then(res => res.data);
}
export function getJavadcript() {
  return axios.get("http://localhost:4000/javascript").then(res => res.data);
}

export function getAnswerData() {
  return axios.get("http://localhost:4000/answer").then(res => res.data);
}
