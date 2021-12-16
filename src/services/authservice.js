import axios from "axios";
import jwt_decode from "jwt-decode";
import Util from "../utils/util";
const url = "http://localhost:8080";

const AuthServices = {
  register: async (registerInfo) => {
    let response = await axios.post(`${url}/api/auth/register`, registerInfo);
    return response.data;
  },
  login: async (loginInfo) => {
    let response = await axios.post(`${url}/api/auth/login`, loginInfo);
    return response.data;
  },
  persistUser: (token) => {
    console.log(token);
    const roles = Util.getUserRoles(token);
    const { sub } = jwt_decode(token);
    const user = {
      username: sub,
      roles
    }
    localStorage.setItem("identity", JSON.stringify(user))
  },
  logout: () => {
    localStorage.removeItem("identity");
    localStorage.removeItem("token");
  },
  ROLE_SELLER: "ROLE_SELLER",
  ROLE_BUYER: "ROLE_BUYER",
  ROLE_ADMIN: "ROLE_ADMIN"
};

export default AuthServices;
