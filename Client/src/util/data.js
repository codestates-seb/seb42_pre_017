import axios from "axios";
export function getFormatDate(inputDate) {
  const date = new Date(inputDate);
  return date.toISOString().split('.')[0].split('T').join(' ')
}
export function getAllData(page) {
  console.log(page.toString());
  // return axios.get(`http://localhost:4000/questions?_page=${page}${category}`).then(res => res.data);
  return axios.get(`http://3.36.120.221:8080/questions?category=&page=${page.toString()}&size=10`).then(res =>res.data);
}
export function getCategoryData(page,category) {
  console.log(category);
  // return axios.get(`http://localhost:4000/questions?_page=${page}${category}`).then(res => res.data);
  return axios.get(`http://3.36.120.221:8080/questions?category=${category}&page=${page.toString()}&size=10`).then(res =>res.data);
}
export function getAnswerData() {
  return axios.get(`http://3.36.120.221:8080/answer?questionId=1`).then(res => res.data.data);
}

