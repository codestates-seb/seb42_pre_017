import axios from "axios";

export function getFormatDate(inputDate) {
  const date = new Date(inputDate);
  return inputDate;
}
export function getAllData() {
  // return axios.get(`http://localhost:4000/questions?_page=${page}${category}`).then(res => res.data);
  return axios.get(`http://3.36.120.221:8080/questions?category=&page=1&size=10`).then(res => res.data.data);
}
export function getAnswerData() {
  return axios.get(`http://3.36.120.221:8080/answer?questionId=1`).then(res => res.data.data);
}
