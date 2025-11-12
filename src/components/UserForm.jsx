import React, { useState } from 'react';

const INITIAL_USER_DATA = {
  name: '',
  email: '',
  password: ''
};

export default function UserForm() {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);

  const [errorObj, setErrorsObj] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
    console.log('User Data Submitted:', userData);
    // console.log("Errors: ", errorObj);  This is not required
    // Make the API call here
    setUserData(INITIAL_USER_DATA);
    }
  };

  const validateForm = () => {
    setErrorsObj({});
    if(userData.name.trim() === '') setErrorsObj(prev => ({...prev, name: 'Name is required'}));
    if(userData.email.trim() === '') setErrorsObj(prev => ({...prev, email: 'Email is required'}));
    if(userData.password.trim() === '') setErrorsObj(prev => ({...prev, password: 'Password is required'}));

    return Object.keys(errorObj).length === 0;
  }

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </label>
        {errorObj.name && <span style={{color: 'red'}}> - {errorObj.name}</span>}
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        {errorObj.email && <span style={{color: 'red'}}> - {errorObj.email}</span>}
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        {errorObj.password && <span style={{color: 'red'}}> - {errorObj.password}</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
