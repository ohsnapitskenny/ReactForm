import './RegistrationForm.css';
import React, {useState} from 'react';
import FormInput from '../components/FormInput/formInput';

const RegistrationForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputFields = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "Firstname",
      label: "Firstname",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
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
    e.preventDefault();
      validateIfPasswordContainsNames()

    // Post Async and get
  };

  const handleInputChange = (e) => {
    const formFieldName = e.target.name;
    if (formFieldName === "password") {
      validateIfPasswordContainsNames()
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function validateIfPasswordContainsNames() { // Place Validation in FormInput
    if (values.password.search(values.firstName) === 0 || values.password.search(values.lastName) === 0){
      alert("There is a name found in the password")
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
      <h2>Sign Up Form</h2>
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
