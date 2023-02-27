import axios from "axios";
export function getAllData(page) {
  console.log(page.toString());
  return axios
    .get(`http://3.36.120.221:8080/questions?category=&page=${page.toString()}&size=10`)
    .then(res => res.data);
}
export function getCategoryData(page, category) {
  console.log(category);
  return axios
    .get(`http://3.36.120.221:8080/questions?category=${category}&page=${page.toString()}&size=10`)
    .then(res => res.data);
}
export function getAnswerData() {
  return axios.get(`http://3.36.120.221:8080/answer?questionId=1`).then(res => res.data.data);
}
