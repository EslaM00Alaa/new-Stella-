 import axios from 'axios';
 
 //const URL="http://localhost:5665";
 const URL="https://api.elmohands-eeib.com";
 const baseURL = axios.create({
   baseURL:`${URL}/api/`,
   headers: {
     "Content-Type": "application/json",
   },
 });
 
 export  {baseURL,URL};
 