import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import './UserLogin.css';

const UserLogin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const Navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/loginviewer', login);
      Navigate('/blog');
      toast.success(`Welcome ${res.data.loginDeatial.name}`);
      Cookies.set('name', res.data.loginDeatial.name);
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error(`${error.response.data.message}`);
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/viewer", registrationData);
      toast.success(`New User Created ${res.data.newUser.name}`);
    } catch (error) {
      console.error("Error registering:", error);
      toast.error('Failed to register. Please try again later.');
    }
  };

  return (
    <>
      <body className="page-body">
        <div className="page-container">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img className="frontImg" src="Images/UserLogin.jpg" alt="" />
            </div>
            <div className="back">
              <img className="backImg" src="Images/UserLogin.jpg" alt="" />
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="signup-form">
                <div className="titles">REGISTER</div>
                <form onSubmit={handleRegistrationSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fa-solid fa-user"></i>
                      <input type="text" placeholder='Name' name="name" onChange={handleRegistrationChange} required />
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-envelope"></i>
                      <input type="email" placeholder='E-mail' name="email" onChange={handleRegistrationChange} required />
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-lock"></i>
                      <input type="password" placeholder='Password' name="password" onChange={handleRegistrationChange} required />
                    </div>
                    <div className="buttons input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="login-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                  </div>
                </form>
              </div>
              <div className="login-form">
                <div className="titles">LOGIN</div>
                <form onSubmit={handleLoginSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input type="text" placeholder="Enter your email" name="email" onChange={handleChange} required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Enter your password" name="password" onChange={handleChange} required />
                    </div>
                    <div className="buttons input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="register-text">Don't have an account? <label htmlFor="flip">Register now</label></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ backgroundColor: 'maroon', color: 'white' }}
      />
    </>
  );
}

export default UserLogin;
