import React, { useRef, useState } from "react";
import imgabout from "./images/about-01.jpg";
import "./Login.css";

function Signup() {
  const [result, setResult] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const ageRef = useRef();
  const handleChangeEmail = (e) => {
    setResult("");
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setResult("");
    setPassword(e.target.value);
  };
  const handleChangeRePassword = (e) => {
    setResult("");
    setRepassword(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setResult("");
    setAddress(e.target.value);
  };
  const handleChangePhone = (e) => {
    setResult("");
    setPhone(e.target.value);
  };
  const handleChangeAge = (e) => {
    setResult("");
    setAge(e.target.value);
  };

  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-43 fw-bold text-color-primary">
                SIGN UP
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
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  ref={passwordRef}
                  className="input100"
                  type="password"
                  name="pass"
                  value={repassword}
                  onChange={handleChangeRePassword}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Enter the password</span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  ref={passwordRef}
                  className="input100"
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleChangeAddress}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Address</span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  ref={phoneRef}
                  className="input100"
                  type="text"
                  name="pass"
                  value={phone}
                  onChange={handleChangePhone}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Phone</span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  ref={ageRef}
                  className="input100"
                  type="text"
                  name="pass"
                  value={age}
                  onChange={handleChangeAge}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Age</span>
              </div>
              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  // onClick={(e) => handleLogin(e)}
                >
                  Sign Up
                </button>
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
}

export default Signup;
