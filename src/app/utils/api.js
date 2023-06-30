
import { fetchAndProcesd } from "./apiAxios";
import { METHOD_TYPE } from "./constant";


const  getUser=(callback)=>{
    
  fetchAndProcesd("/users",METHOD_TYPE.GET,null,callback);
}


// const API = {getUser};
export default getUser;