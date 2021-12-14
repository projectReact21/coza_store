import api from "./api";
const login=(email,password)=>{
    const data={email:email,password:password}
   return api.post(api.url.login,data).then(res=>res.data)
}
const loginService={
    login
}
export default loginService