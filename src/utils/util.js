import jwt_decode from "jwt-decode";

const Util = {
  formValid: (event) => {
    const form = event.currentTarget;
    if (form.checkValidity) {
      return true;
    } else {
      return false;
    }
  },
  persistToken: (response) => {
    let token = response.split(":")[1];
    localStorage.setItem("token", token);
    return token;
  },
  getUserRoles: (token) => {
    const decodedToken = jwt_decode(token);
    let roles=[];
    console.log(decodedToken)
    for(let item of decodedToken.authorities){
      if(item.authority.indexOf("ROLE_")>=0){
        roles.push(item.authority);
      }
    }
    return roles;
  }
};

export default Util;
