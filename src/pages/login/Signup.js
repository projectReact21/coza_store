import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/loginService";
import imgabout from "./images/about-01.jpg";
import "./Login.css";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

function Signup() {
  const defaultImage = "https://restfulapi.dnd-group.net/public/photo-icon.png";
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(defaultImage);
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
    avata: imagePreview,
    gender: 0,
    email: "",
    password: "",
    phone: "",
    age: 24,
    create_at: "",
    dress: "",
    ward: "",
    district: "",
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
  const inputFieldRef = useRef();
  const handleChaneImage = (e) => {
    if (e.target.files && e.target.files[0])
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    const newData = { ...data };
    newData.avata = e.target.files[0];
    setData(newData);
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
    const dis = districts.find((x) => x.code === parseInt(e.target.value));
    console.log(e.target);
    const newData = { ...data };
    newData[e.target.name] = dis.codename;
    setData(newData);
    console.log(newData);
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
        toast.success("T??i kho???n ???? ???????c ????ng k??");
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
                ????NG K??
              </span>
              <strong className="text-danger text-center text-capitalize ">
                {result}
              </strong>
              <img
                src={imagePreview}
                alt=""
                className="img-thumbnail img rounded-circle border-primary d-block"
              />
              <input
                type="file"
                ref={inputFieldRef}
                className="d-none"
                onChange={handleChaneImage}
              />
              <div className="mt-3 d-flex justify-content-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => inputFieldRef.current.click()}
                >
                  Thay ?????i
                </Button>
              </div>
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
                  placeholder="T??n T??i Kho???n"
                />
                {/* <span className="focus-input100"></span>
                <span className="label-input100">T??n T??i Kho???n</span> */}
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
                  placeholder="Email"
                />
                {/* <span className="focus-input100"></span>
                <span className="label-input100">Email</span> */}
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
                  placeholder="M???t Kh???u"
                />
                {/* <span className="focus-input100"></span>
                <span className="label-input100">M???t Kh???u</span> */}
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
                  placeholder="Nh???p L???i M???t Kh???u"
                />
                {/* <span className="focus-input100"></span>
                <span className="label-input100">Nh???p L???i M???t Kh???u</span> */}
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
                  placeholder="??i???n Tho???i"
                />
                {/* <span className="focus-input100"></span>
                <span className="label-input100">??i???n Tho???i</span> */}
              </div>
              <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9 ">
                <select
                  name="city"
                  className="form-select form-select-lg input form-city"
                  onChange={handleChangeData}
                  aria-label="Default select example"
                >
                  {age.map((c, index) => (
                    <option key={index} value={c}>
                      {c} Tu???i
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
                <span className="label-input100">?????a Ch???</span>
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
                  name="district"
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
                  ????ng Nh???p
                </button>
                <button
                  type="button"
                  className="login100-form-btn btn-signup"
                  onClick={handleSignup}
                >
                  ????ng K??
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
