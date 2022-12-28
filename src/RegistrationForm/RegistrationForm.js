import './RegistrationForm.css';
import React, { useState, useEffect } from 'react';
import FormInput from '../components/FormInput/formInput';

const RegistrationForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formValid, setFormStatus] = useState(false);

  const [users, setUser] = useState([]);

  const inputFields = [
    {
      _id: 1,
      name: "firstName",
      type: "text",
      placeholder: "FirstName",
      label: "Firstname",
      required: true,
    },
    {
      _id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Lastname",
      label: "Lastname",
      required: true,
    },
    {
      _id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      _id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should have atleast one uppercase and one lowercase, also it must contain atleast 8 characters!",
      label: "Password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$",
      required: true,
    },
    {
      _id: 5,
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

    if (!formValid) {
      // Button should be disabled when form is invalid.
      alert("There is a name in the password")
      return
    }

    createUser(values)

    getUsers().then((res) => {
      setUser(res)
    })
      .catch((e) => {
        alert(e.message)
      })
  };

  //#region GET / POST Methods
  //Concept
  // const httpClient = async (url, method, headers, body) => {
  //   const response = await fetch(`https://demo-api.vercel.app/users`,);
  //   return await response.json();
  // }

  const getUsers = async () => {
    const response = await fetch(`https://demo-api.vercel.app/users`);
    const result = await response.json()
    await new Promise(resolve => setTimeout(resolve, 4000));
    alert("User has been fetched!")
    return result;
  }

  const createUser = (data) => {
    const user = { firstName: data.firstName, lastName: data.lastName, email: data.email };
    postUser(user).then((res) => {
    alert("User has been created!");
    })
  };

  const postUser = async (user) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };
    return await fetch(`https://demo-api.vercel.app/users`, requestOptions);
  }
  //#endregion

  //#region Form Methods
  const handleInputChange = (e) => {
    const formFieldName = e.target.name;
    if (formFieldName === "password") {
      setFormStatus(isValidPasswordWithoutNames())
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function isValidPasswordWithoutNames() {
    if (values.password.search(values.firstName) === 0 || values.password.search(values.lastName) === 0) {
      return false
    }
    return true
  }
  //#endregion

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
        <h2>Sign Up Form</h2>
        <h2>Form Value: {formValid}</h2>
        <div className='form-body'>
          {inputFields.map((input) => (
            <FormInput
              key={input._id}
              {...input}
              value={values[input.name]}
              onChange={handleInputChange}
            />
          ))}
        </div>
        <div className='form-footer'>
          <button type="submit" disabled={false} >Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm;
