import { Base_URL, METHOD_TYPE } from "./constant";
import axios from 'axios';

export const fetchAndProcesd = (url, method, data, callback) => {
    const options = {
        baseURL: Base_URL,
        url: url,
        method: method,
        params: method === METHOD_TYPE.GET ? data : null,
        data: method !== METHOD_TYPE.GET ? data : null
      }
    axios(options)
        // .then((res) => callback(false,res.data))
        .then((res) => callback(false,res.data))
        .catch(err => { 
            console.log(err);
        })
}
