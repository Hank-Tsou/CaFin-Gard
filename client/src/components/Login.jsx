import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login(props) {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [register, setRegister] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });

  const [notification, setNotification] = useState("Welcome to CaFin Gard!");

  function handleLoginChange(event) {
    const { name, value } = event.target;

    setUser(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleRegisterChange(event) {
    const { name, value } = event.target;

    setRegister(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleLoginClick(event){
    event.preventDefault();

    const userInfo = {
      username: user.username,
      password: user.password
    };

    axios.post('/login', userInfo)
    .then(function (response) {
      props.updateUserId(response.data.userId);
      navigate('/mycoffee');
    })
    .catch(function (error) {
      console.log(error);
    });
    setNotification("Forgot Username or Password?")
  }

  function handleRegisterClick(event){
    event.preventDefault();

    const registerInfo = {
      username:register.username,
      email:register.email,
      phone:register.phone,
      password:register.password
    };

    axios.post('/register', registerInfo);
  }

  return (
    <div>

      <div className="Logincontainer">
        <section id="formHolder">
          <div className="row">
            {/* Brand Box */}
            <div className="brand">
              <img src={process.env.PUBLIC_URL + '/img/login.jpeg'}  alt="login_img" />
            </div>

            {/* Form Box */}
            <div className="form">
              {/* Login Form */}
              <div className="form-peice switched">
                <div className="form_locater_1">

                  <form onSubmit={handleLoginClick} className="login-form">
                    <div className="form-group">
                      <label htmlFor="username">User Name</label>
                      <input
                        onChange={handleLoginChange}
                        type="text"
                        name="username"
                        value={user.username}
                        autoComplete="off"
                        required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="loginPassword">Password</label>
                      <input
                        onChange={handleLoginChange}
                        name="password"
                        type="password"
                        value={user.password}
                        required />
                    </div>

                    <div className="CTA">
                      <input
                        type="submit"
                        className="button"
                        value="Login" />
                      <a href="/#" className="login_switch active">I'm New</a>
                    </div>
                  </form>
                </div>
                <div className="errorNotification">
                  <img src={process.env.PUBLIC_URL + '/img/notification.png'}  alt="notification_img" />
                  {notification}
                </div>
              </div>
              {/* End Login Form */}

              {/* Signup Form */}
              <div className="form-peice">
                <div className="form_locater_2">

                  <form onSubmit={handleRegisterClick} className="signup-form">
                    <div className="form-group">
                      <label htmlFor="name">User Name</label>
                      <input
                        onChange={handleRegisterChange}
                        type="text"
                        name="username"
                        className="name"
                        value={register.username}
                        autoComplete="off"
                        required />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Adderss - <small>Optional</small></label>
                      <input
                        onChange={handleRegisterChange}
                        type="text"
                        name="email"
                        id="email"
                        className="email"
                        value={register.email}
                        autoComplete="off" />
                      <span className="error" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number - <small>Optional</small></label>
                      <input
                        onChange={handleRegisterChange}
                        type="text"
                        name="phone"
                        value={register.phone}
                        autoComplete="off" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        onChange={handleRegisterChange}
                        type="password"
                        name="password"
                        value={register.password}
                        className="pass"
                        required />
                      <span className="error" />
                    </div>

                    <div className="CTA">
                      <input type="submit" className="button" id="register" value="SignUp" />
                      <a href="/#" className="login_switch" id="sended">I have an account</a>
                    </div>
                  </form>

                </div>
              </div>
              {/* End Signup Form */}

            </div>
          </div>

        </section>

      </div>
    </div>
  );
}

export default Login;
