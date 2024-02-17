import React,{useState} from 'react';
import "../style.css";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Login = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Active le défilement automatique
    autoplaySpeed: 2000,
    customPaging: function (i) {
      return <div className="custom-dot"></div>; // Utilisez la classe personnalisée pour les dots
    },
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vous pouvez traiter les données du formulaire ici, par exemple, les envoyer à votre API
    console.log('Form submitted with data:', {email, password, termsAccepted });

  };
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-5 partie-2 left-side  ">
        <div className="photos">
            <Slider {...settings}>
              <div>
                <img src="photos/photo1.jpg" alt="" />
              </div>
              <div>
                <img src="photos/photo2.jpg" alt="" />
              </div>
              <div>
                <img src="photos/photo3.jpg" alt="" />
              </div>
            </Slider>


          </div>
          <h1 className="titrePhotos">Find your ideal <br /> rental with <br /> Darstay</h1>
        </div>

        <div className="col-md-5 m-5 right-side d-flex align-items-center justify-content-center">
        <div>
            <div className="backgroundlogo">
              <img className="logo1" src="photos/logo.png" alt="" />
            </div>
            <h1 className="titre">Welcome to Darstay</h1>
            <p className='bg-paragraphe'>Welcome back ! Log in with the data you have <br/>entered during registration.</p>
            <form className="form-signup-login" onSubmit={handleSubmit}>
              
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
              
              <div className="pb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                Remember
                </label>
                <Link className='forgot-pass' to="/ForgotPassword">Forgot your password?</Link>
              </div>
              <button type="submit" className="mb-3 submit btn btn-primary w-100">Log in</button>
              
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


          
      </div>
    </div>
  );
};


export default Login;