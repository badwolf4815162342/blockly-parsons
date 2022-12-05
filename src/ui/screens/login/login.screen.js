import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Login() {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState({ value: '' });
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  // const history = useHistory();
  console.log('auth', localStorage.getItem('isAuthenticated'));

  const handleInputChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData.username);
    console.log(userData.password);
    // if username or password field is empty, return error message
    if (userData.username === '' || userData.password === '') {
      setErrorMessage(() => ({
        value: 'Empty username/password field',
      }));
    } else if (userData.username === 'admin' && userData.password === '123456') {
      // Signin Success
      localStorage.setItem('isAuthenticated', 'true');
      setRedirectToReferrer(true);
    } else {
      // If credentials entered is invalid
      setErrorMessage(() => ({ value: 'Invalid username/password' }));
    }
  };

  if (redirectToReferrer) {
    return (
      <Navigate to="/admin" />
    );
  }

  return (

    <div className="text-center">
      <h1>Signin User</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="form-group">
          <h2>Username</h2>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group">
          <h2>Password</h2>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {errorMessage.value && (
          <p className="text-danger">
            {' '}
            {errorMessage.value}
            {' '}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
