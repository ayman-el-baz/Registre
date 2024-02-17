import React, { useState } from 'react';
import "../style.css";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SignUp = () => {
  // ... (importations et autres codes)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function (i) {
      return <div className="custom-dot"></div>;
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Laravel backend
      const response = await fetch('http://127.0.0.1:8000/api/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          confirmPassword,
          termsAccepted,
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('User registered successfully');
        // Optionally, you can redirect the user to a success page
      } else {
        // Handle errors
        const data = await response.json();
        console.error('Registration failed:', data);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-5 m-5 left-side d-flex align-items-center justify-content-center">
          <div>
            <div className="backgroundlogo">
              <img className="logo1" src="photos/logo.png" alt="" />
            </div>
            <h1 className="titre">Create a new account</h1>
            <form className="form-signup-login" onSubmit={handleSubmit}>
              <div className="pb-3 input-with-icon">
                <label htmlFor="" className="form-label">full name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <span className="user-icon"></span>
              </div>
              <div className="mb-3 input-with-icon">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter your e-mail adress..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="email-icon"></span>
              </div>
              <div className="pb-3 input-with-icon">
                <label htmlFor="" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="password-icon"></span>
              </div>
              <div className="pb-3 input-with-icon">
                <label htmlFor="" className="form-label">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className="password-icon"></span>
              </div>
              <div className="pb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  By registering, I accept the terms and conditions as well as privacy policy
                </label>
              </div>
              <button type="submit" className="mb-3 submit btn btn-primary w-100">Create account</button>
              <div className="login">
                <label htmlFor="">Already a member?</label>
                <Link to="/Login">Log in</Link>
              </div>
              <div>
                <p className="or">or</p>
              </div>
              <div className="icons">
                <button type="submit" className="mr-5 py-2 btn border px-5 ">
                  <img src="photos/google.png" alt="" />
                </button>
                <button type="submit" className="mr-5 py-2 btn border px-5  ">
                  <img src="photos/facebook.png" alt="" />
                </button>
                <button type="submit" className="mr-5 py-2 btn border px-5 ">
                  <img src="photos/logo-apple.png" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-5 partie-2 right-side ">
          <div className="photos">
            <Slider {...settings}>
              <div>
                <img src="photos/photo1.jpg" alt="" />
              </div>
              <div>
                <img src="photos/photo2.jpg" alt="" />
              </div>
              <div>
                <img src="photos/photo3.jpg" alt="" srcSet="" />
              </div>
            </Slider>
          </div>
          <h1 className="titrePhotos">Find your ideal <br /> rental with <br /> Darstay</h1>
        </div>
      </div>
    </div>
  );
};


export default SignUp;