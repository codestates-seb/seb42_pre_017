import axios from "axios";
export function getAllData(page) {
  console.log(page.toString());
  return (
    axios
      .get(`http://13.209.121.17:8080/questions?category=&page=${page.toString()}&size=10`)
      // .get(`http://3.39.255.131:8080/questions?category=&page=${page.toString()}&size=10`)

      .then(res => res.data)
  );
}
export function getCategoryData(page, category) {
  console.log(category);
  return (
    axios
      .get(`http://13.209.121.17:8080/questions?category=${category}&page=${page.toString()}&size=10`)
      // .get(`http://3.39.255.131:8080/questions?category=${category}&page=${page.toString()}&size=10`)
      .then(res => res.data)
  );
}

export function login() {
  //로그인하면 로그인 정보 담는곳, 아마 아랫줄에 이거 이용해서 토큰 받아올듯
  localStorage.setItem("login", JSON.stringify({ memberId: 1, email: "sij333@naver.com", nickname: "뉸누" }));
}
export function getUser() {
  //데이터 (혹은 memberId) 있는지 판별해주고 그에 맞는 데이터 내보내주는 함수
  if (localStorage.getItem("login")) {
    return JSON.parse(localStorage.getItem("login"));
  }
}
export function logout() {
  localStorage.clear();
}
