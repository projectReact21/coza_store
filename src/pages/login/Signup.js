import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/loginService";
import imgabout from "./images/about-01.jpg";
import "./Login.css";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [city, setCity] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [age, setAge] = useState([]);

  const ageset = () => {
    for (let i = 1; i <= 100; i++) {
      age.push([i]);
    }
  };
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
    password: "",
    phone: "",
    age: 24,
    create_at: "",
    dress: "",
    ward: "",
    distrist: "",
    city: "",
  });
  useEffect(() => {
    loadData();
    ageset();
  }, [wards]);
  const loadData = () => {
    fetch("https://provinces.open-api.vn/api/?depth=2")
      .then((res) => res.json())
      .then((result) => {
        setCity(result);
      });
  };
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

  const handleChangeCity = (e) => {
    e.preventDefault();
    const dis = city.find((x) => x.codename === e.target.value);
    console.log(dis);
    setDistricts(dis.districts);
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  const handleChangeDistrict = (e) => {
    e.preventDefault();
    console.log(e.target);
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    fetch("https://provinces.open-api.vn/api/w")
      .then((res) => res.json())
      .then((result) => {
        wards.length = 0;
        for (var i = 0; i <= result.length - 1; i++) {
          if (parseInt(result[i].district_code) === parseInt(e.target.value))
            wards.push(result[i]);
        }
        loadData();
      });
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
    data.create_at = getdate();
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
  const handleLogin = (e) => {
    navigate("/login");
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
                  ref={phoneRef}
                  className="input100"
                  type="phone"
                  name="phone"
                  onChange={handleChangeData}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Phone</span>
              </div>
              <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9 ">
                <select
                  name="city"
                  className="form-select form-select-lg input form-city"
                  onChange={handleChangeData}
                  aria-label="Default select example"
                  // defaultValue={checkout.city}
                >
                  {age.map((c, index) => (
                    <option key={index} value={c}>
                      {c} years ago
                    </option>
                  ))}
                </select>
                <div className="dropDownSelect2"></div>
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
              <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9 ">
                <select
                  name="city"
                  className="form-select form-select-lg input form-city"
                  onChange={(e) => handleChangeCity(e)}
                  aria-label="Default select example"
                  // defaultValue={checkout.city}
                >
                  {city.map((c, index) => (
                    <option key={index} value={c.codename}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="dropDownSelect2"></div>
              </div>
              <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                <select
                  name="distrist"
                  className="form-select form-select-lg input form-city "
                  onChange={(e) => handleChangeDistrict(e)}
                  aria-label="Default select example"
                  // defaultValue={checkout.district}
                >
                  {districts.map((c, index) => (
                    <option key={index} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="dropDownSelect2"></div>
              </div>
              <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                <select
                  name="ward"
                  className="form-select form-select-lg input form-city"
                  aria-label="Default select example"
                  onChange={handleChangeData}
                  // defaultValue={checkout.ward}
                >
                  {wards.map((c, index) => (
                    <option key={index} value={c.codename}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="dropDownSelect2"></div>
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
                <button className="login100-form-btn" onClick={handleLogin}>
                  Login
                </button>
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
