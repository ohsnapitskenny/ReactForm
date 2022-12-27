import { useState } from "react"

const UseRegistrationForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleInputChange = (event) => {
    const formFieldName = event.target.name;
    const formFieldvalue = event.target.value;

    switch (formFieldName) {
      case "email":
        validateEmail(formFieldvalue)
        break;
      case "password1":
        // validatePassword(formFieldvalue)
        break;
      case "password2":
        // Check if PassWord2 is same as password1
        break;
      default:
        break;
    }

    event.persist();
    setInputs((inputs) => ({ ...inputs, [formFieldName]: formFieldvalue }));
  };

  function validateEmail(emailaddress) {
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!emailRegex.test(emailaddress)) {
      alert("You have entered an invalid email address!");
    }
  };
  
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      callback();
    }
  }
  
  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

export default UseRegistrationForm;
