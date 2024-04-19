import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewLogin.css';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { database } from '../Firebase/FirebaseConfigure';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const NewLogin = () => {
  const navigate = useNavigate()
  const handleRegister = (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const phone = e.target.phone.value
    createUserWithEmailAndPassword(database,email,password,phone).then(data=>{
      console.log(data);
      navigate('/adminPage')
    })
  }
  const handleLoginSubmit = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(database,email,password).then(data=>{
      console.log(data);
      navigate('/adminPage')
    }).catch(err=>{
      alert(err.code)
    })
  }
 

  return (
    <>
      <body className="page-body">
        <div className="page-container">
          <input type="checkbox" id="flip" style={{display:'none'}} />
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
                <form onSubmit={(e)=>handleRegister(e)}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fa-solid fa-user"></i>
                      <input type="text" placeholder='Name' name="name"  required />
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-envelope"></i>
                      <input type="text" placeholder='E-mail' name="email"  required/>
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-lock"></i>
                      <input type="password" placeholder='Password' name="password"  required/>
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-phone"></i>
                      <input type="tel" placeholder='Phone Number' name="phone"  required/>
                    </div>
                    {/* <div className="input-box">
                      <i className="fa-solid fa-house"></i>
                      <input type="text" placeholder='Address' name="address"  required/>
                    </div>
                    <div className="input-box">
                      <i className="fa-solid fa-id-card"></i>
                      <input type="text" placeholder='Aadhaar Card Number' name="adharcard"  required/>
                    </div> */}
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
                      <input type="text" placeholder="Enter your email" name="email" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Enter your password" name="password" required/>
                    </div>
                    <div className="buttons input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    
                    <div className="register-text">Don't have an account? <label htmlFor="flip">Register now</label></div>
                    <div className="fp-anchor"><Link to="/forgot" style={{textAlign:'center',textDecoration:'none',color:'black',marginLeft:'113px'}}>Forgot Password?</Link></div>
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