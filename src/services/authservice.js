import axios from "axios";
const url = "http://localhost:8080";

const AuthServices = {
  register: async (registerInfo) => {
    let response = await axios.post(`${url}/api/auth/register`, registerInfo);
    return response.data;
  },
  login: async (loginInfo) => {
    console.log(loginInfo);
    let response = await axios.post(`${url}/api/auth/login`, loginInfo);
    return response.data;
  },
};

export default AuthServices;
