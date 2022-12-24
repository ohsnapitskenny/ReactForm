import React  from 'react';
import UseRegistrationForm from './hooks/useRegistrationForm';

const RegistrationForm = () => {
  const SECONDSTOWAIT = 4000;

  const registerUser = () => {
    alert(`User Created! 
    Name: ${inputs.firstName} ${inputs.lastName}
    Email: ${inputs.email}`);
  }
  const {inputs, handleInputChange, handleSubmit} = UseRegistrationForm({firstName: '', lastName: '', email: '', password1: '', password2: ''}, registerUser);
  // function resolveAfterFoursSeconds() {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve('resolved');
  //     }, SECONDSTOWAIT);
  //   });
  // }

  // async function asyncCall() {
  //   console.log('calling');
  //   const result = await resolveAfter2Seconds();
  //   console.log(result);
  //   // expected output: "resolved"
  // }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className='form-body'>
          <span>Firstname: </span>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
          <br />
          <span>LastName: </span>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleInputChange}
            value={inputs.lastName}
            required
          />
          <br />
          <span>Email: </span>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
          <br />
          <span>Password: </span>
          <input
            type="password"
            placeholder="Password"
            name="password1"
            onChange={handleInputChange}
            value={inputs.password1}
            required
          />
          <br />
          <span>Re-enter Password: </span>
          <input
            type="password"
            placeholder="Re-enter Password"
            name="password2"
            onChange={handleInputChange}
            value={inputs.password2}
            required
          />
          <br />
        </div>
        <div className='form-footer'>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm;
