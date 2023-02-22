import axios from 'axios';

export function getFormatDate(inputDate) {
    const date = new Date(inputDate)
    return date.toISOString().split('.')[0].split('T').join(' ')
 }
export function getAllData(page,category){
return axios.get(`http://localhost:4000/questions?_page=${page}${category}`).then(res=>res.data)
}
// export function getTypeScript(page,category){
//     return axios.get('http://localhost:4000/typescript').then(res=>res.data)
// }
// export function getJavadcript (page,category){
//     return axios.get('http://localhost:4000/javascript').then(res=>res.data)
// }
