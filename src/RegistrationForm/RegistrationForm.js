import './RegistrationForm.css';
import React, {useState} from 'react';
import FormInput from '../components/FormInput/formInput';

const RegistrationForm = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputFields = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Firstname",
      label: "Firstname",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      label: "Lastname",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should have atleast one uppercase and one lowercase, also it must contain atleast 8 characters!",
      label: "Password",
      pattern: "^(?=.*[A-Za-z0-9]+).{8,}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    validateIfPasswordContainsNames(values.password, values.firstname, values.lastname)
    e.preventDefault();
  };

  function validateIfPasswordContainsNames(password, firstName, lastName) { // Place Validation in FormInput
    if (password.search(firstName) === 0 || password.search(lastName) === 0){
      alert("There is a name found in the password")
    }
  }

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
        <div className='form-body'>
          {inputFields.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleInputChange}
            />
          ))}
        </div>
        <div className='form-footer'>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm;
