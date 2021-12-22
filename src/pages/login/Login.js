import React, { useState, useRef } from "react";
import "./Login.css";
import imgabout from "./images/about-01.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loginService from "./../../services/loginService";
import ActionTypes from "../../stores/action";
import productService from "../../services/productService";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [result, setResult] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useSelector((state) => state.auth.currentLocation);
  const handleChangeEmail = (e) => {
    setResult("");
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setResult("");
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    loginService.login(email, password).then((res) => {
      if (res.errorCode === 0) {
        console.log(res.data);
        dispatch({
          type: ActionTypes.LOGIN,
          dataUser: res.data,
        });
        productService.getFillProduct(1).then((res) => {
          dispatch({
            type: ActionTypes.FIND_LIKE_DATA,
            productLike: res.data.data,
          });
        });
        navigate(location);
      } else if (res.errorCode === 1) {
        setEmail("");
        emailRef.current.focus();
        setResult(res.errorMessage);
      } else {
        setPassword("");
        passwordRef.current.focus();
        setResult(res.errorMessage);
      }
    });
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-43">
                Login to continue
              </span>
              <strong className="text-danger text-center text-capitalize ">
                {result}
              </strong>

              <div
                className="wrap-input100 validate-input mt-2"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  ref={emailRef}
                  className="input100"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Email</span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  ref={passwordRef}
                  className="input100"
                  type="password"
                  name="pass"
                  value={password}
                  onChange={handleChangePassword}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Password</span>
              </div>

              <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>

                <div>
                  <a href="/#" className="txt1">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  onClick={(e) => handleLogin(e)}
                >
                  Login
                </button>
              </div>

              <div className="text-center p-t-46 p-b-20">
                <span className="txt2">or sign up using</span>
              </div>

              <div className="login100-form-social flex-c-m">
                <a
                  href="/#"
                  className="login100-form-social-item flex-c-m bg1 m-r-5 text-decoration-none"
                >
                  <i className="fa fa-facebook-f" aria-hidden="true"></i>
                </a>

                <a
                  href="/#"
                  className="login100-form-social-item flex-c-m bg2 m-r-5 text-decoration-none"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
            </form>

            <div
              className="login100-more"
              style={{ backgroundImage: `url(${imgabout})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
