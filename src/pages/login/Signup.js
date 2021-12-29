import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/loginService";
import imgabout from "./images/about-01.jpg";
import "./Login.css";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [result, setResult] = useState("");

  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  // const ageRef = useRef();
  const [data, setData] = useState({
    userName: "user",
    avata: "https://www.w3schools.com/howto/img_avatar.png",
    gender: 0,
    email: "",
    dress: "",
    phone: "",
    password: "",
  });
  const handleChangeData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  const handleChangeRePassword = (e) => {
    if (data.password !== e.target.value) {
      setResult("password incorrect");
    } else {
      setResult("");
    }
  };
  const getdate = () => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    return date;
  };
  const handleSignup = () => {
    // data.create_at = getdate();
    loginService.signup(data).then((res) => {
      console.log(res);
      if (res.data.errorCode === 0) {
        toast.success(res.data.errorMessage);
        console.log("ok");
        navigate("/login");
      } else {
        toast.danger(res.data.errorMessage);
      }
    });
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
                  ref={userRef}
                  className="input100"
                  type="text"
                  name="userName"
                  onChange={handleChangeData}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">UserName</span>
              </div>
              <div
                className="wrap-input100 validate-input mt-2"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  ref={emailRef}
                  className="input100"
                  type="text"
                  name="email"
                  onChange={handleChangeData}
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
                  name="password"
                  onChange={handleChangeData}
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
                  name="dress"
                  onChange={handleChangeData}
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
                  type="phone"
                  name="phone"
                  onChange={handleChangeData}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Phone</span>
              </div>
              {/* <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  ref={ageRef}
                  className="input100"
                  type="text"
                  name="age"
                  onChange={handleChangeData}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Age</span>
              </div> */}
              <div className="container-login100-form-btn">
                <button
                  type="button"
                  className="login100-form-btn btn-signup"
                  onClick={handleSignup}
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
