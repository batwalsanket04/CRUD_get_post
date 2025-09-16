import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false, 
  });

  const FormHandle = (e) => {
    const { name, type, value, checked } = e.target;

    setData({
      ...data,
      [name]: type === "checkbox" ? true : value,  
    });
    console.log(e.target)
  };

  const saveForm = async(e) => {
    e.preventDefault();

    window.confirm("Login Successfully..!");
    setData({ email: "", password: "", remember: false });
    console.log(data);

    await axios.post('http://localhost:3000/User',data)

  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="card-title text-center mb-4">Login</h3>
        <form onSubmit={saveForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              onChange={FormHandle}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={data.password}
              onChange={FormHandle}
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
              name="remember"
              checked={data.remember}
              onChange={FormHandle}
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <div className="mt-3 text-center">
            <NavLink to="#">Forgot Password?</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
