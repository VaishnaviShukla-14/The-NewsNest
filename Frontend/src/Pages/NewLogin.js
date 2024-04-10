import './NewLogin.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const NewLogin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        adharcard: "",
      });

  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    adharcard: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "email" || e.target.name === "password") {
      setLogin({ ...login, [name]: value });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const Navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/login', login);
      Navigate('/AdminPage');
      toast.success(`Welcome ${res.data.loginDeatial.name}`);
      console.log(res.data.loginDeatial.name);
      Cookies.set('name', res.data.loginDeatial.name);
    } catch (error) {
      console.log("error to login", error);
      toast.error(`${error.response.data.mess}`);
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, phone, address, adharcard } = registrationData;

    try {
      const res = await axios.post("http://localhost:3001/api/user", {
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address,
        adharcard: adharcard,
      });
      if (res.data && res.data.newUser.address !== "") {
        toast.success(`New User Created ${res.data.newUser.name}`);
      }
    } catch (error) {
      if (error.response) {
        console.error("Server error:", error.response.data);
        toast.error('Server error. Please try again later.');
      } else if (error.request) {
        console.error("No response from server:", error.request);
        toast.error('No response from server. Please try again later.');
      } else {
        console.error("Request error:", error.message);
        toast.error('Request error. Please try again later.');
      }
    }
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  return (
    <>
      <body className="page-body">
        <div className="page-container">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img className="frontImg" src="Images/login_register_logo.jpg" alt="" />
            </div>

            <div className="back">
              <img className="backImg" src="Images/login_register_logo.jpg" alt="" />
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
                      <input type="text" placeholder='E-mail' name="email" onChange={handleRegistrationChange} required/>
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-lock"></i>
                      <input type="password" placeholder='Password' name="password" onChange={handleRegistrationChange} required/>
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-phone"></i>
                      <input type="tel" placeholder='Phone Number' name="phone" onChange={handleRegistrationChange} required/>
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-house"></i>
                      <input type="text" placeholder='Address' name="address" onChange={handleRegistrationChange} required/>
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-id-card"></i>
                      <input type="text" placeholder='Aadhaar Card Number' name="adharcard" onChange={handleRegistrationChange} required/>
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
                      <input type="password" placeholder="Enter your password" name="password" onChange={handleChange} required/>
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
  )
}

export default NewLogin;
