const Validation = {
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
    
  },
};

export default Validation;
