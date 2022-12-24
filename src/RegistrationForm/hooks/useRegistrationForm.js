import {useState} from 'react';

const UseRegistrationForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  }
  const handleInputChange = (event) => {
    // Check What field is coming in
    // If Password please check if they're the same also check on name
    // if email pls regex and validate mail
    
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default UseRegistrationForm;
