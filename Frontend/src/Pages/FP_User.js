import React, { useState } from 'react'; // Import React for creating React components
import './FP_User.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import { database } from '../Firebase/FirebaseConfigure';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FP_User = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailval = e.target.email.value;
    sendPasswordResetEmail(database, emailval)
      .then(() => {
        toast.success('Check your email');
        navigate('/NewLogin');
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };













  // Rename component to reflect functionality
  return (
    <>
      <body class="page-body">
        <div class="page-container">
          {/* <input type="checkbox" id="flip" /> */}
          <div class="cover">
            <div class="front">
              <img class="frontImg" src="Images/oops_fp.png" alt="" />
            </div>

            <div class="back">
              <img class="backImg" src="Images/we_fp.png" alt="" />
            </div>

          </div>
          <div class="forms">
            <div class="form-content">


              <div class="signup-form">
                <div class="titles">FORGOT PASSWORD ?</div>


                <form onSubmit={(e) => handleSubmit(e)}>
                  <div class="input-boxes">
                    <div class="input-box">
                      <i class="fa-solid fa-envelope"></i>
                      <input type="email" name='email' placeholder='E-mail' required />
                    </div>
                    <div class="buttons input-box">
                      <input type="submit" value="Send the OTP" />
                    </div>
                    {/* <div class="login-text">OTP sent! <label for="flip">Proceed Now</label></div> */}
                  </div>
                </form>
              </div>


              <div class="login-form">
                <div class="titles">WORRY NOT !</div>
                <form action="#">
                  <div class="input-boxes">
                    <div class="input-box">
                      <i class="fa-solid fa-location-pin"></i>
                      <input type="number" placeholder="Enter the OTP received" required />
                    </div>
                    <div class="input-box">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Enter the Original Password" required />
                    </div>

                    <div class="input-box">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Enter the New Password" required />
                    </div>


                    <div class="buttons input-box">
                      <input type="submit" value="Reset Password" />
                    </div>
                    <div class="register-text"><label for="flip">Back</label></div>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default FP_User;