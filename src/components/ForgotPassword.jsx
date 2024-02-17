import React from 'react';
import "../style.css";

export default function ForgotPassword() {
  return (
    <main>
      <div>
        <img className='logo' src="photos/logoDarStay.png" alt=""  />
        <h1 className='h1-resetPass pb-3'>Reset Password</h1>
      </div>
      <form className="form-reset " >
        <p className="text-reset">Enter your user account's verified email address and we will send you a password reset link.</p>
        <div className="pb-3 input-with-icon">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <span className="forget-email-icon"></span>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <button type="submit" className="submit btn btn-primary">Send password reset email</button>
      </form>

    </main>



  )
}
