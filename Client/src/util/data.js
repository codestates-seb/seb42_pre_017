import axios from 'axios';

//date format 함수  가운데 T 없애는방법 고민해볼게요!
export function getFormatDate(inputDate) {
    const date = new Date(inputDate)
    return date.toISOString().split('.')[0].split('T').join(' ')
 }

export function getAllData(){
return axios.get('http://localhost:4000/data').then(res=>res.data)
}
export function getTypeScript(){
    return axios.get('http://localhost:4000/typescript').then(res=>res.data)
}
export function getJavadcript (){
    return axios.get('http://localhost:4000/javascript').then(res=>res.data)
}
