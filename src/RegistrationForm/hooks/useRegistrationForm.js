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
        validatePassword(formFieldvalue)
        // Zou mooi zijn als het onActive los laat
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

  function validatePassword(password) {
    const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.{8,})')
    
    // const firstName = this.inputs.firstName;
    // const lastName = this.inputs.lastName;

    // // Validate if Passsword has first or/-and lastname in it
    // const result1 = password.search(/firstName/);
    // const result2 = password.search(/lastName/);

    // if (!passwordRegex.test(password)) {
    //   alert("Your password is not strong enough!");
    // }
  }

  
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
