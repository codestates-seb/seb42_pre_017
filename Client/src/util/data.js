import axios from 'axios';
export function getData(){
return axios.get('http://localhost:3000/data').then(res=>res.data)
}
