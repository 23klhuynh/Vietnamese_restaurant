import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import LoginImage from "../assets/login.jpg";
import { useUser } from "../auth/UserContext";
import toast from "react-hot-toast";

/* how to retrieve the token */

function Login() {
  const [formInfo, setFormInfo] = useState({ username: "", password: "" });
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://vietnamese-restaurant-backend.onrender.com/auth/login",
        { username: formInfo.username, password: formInfo.password },
        {
          headers: {
            "Content-Type": "application/json",
            /* Authorization: `Bearer ${accessToken}` */
          },
          withCredentials: true,
          
        }
      );

      if (response.status === 200) {
        toast.success("Login successful!");
        setFormInfo({ username: "", password: "" });
        navigate("/");
        setUser(true);
        localStorage.setItem("access_token", response.data.access_token);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          toast.error("Invalid username or password!");
        } else if (axiosError.response.status === 400) {
          toast.error("Please fill out all fields.");
        } else {
          toast.error("An unexpected error occurred. Try again!");
        }
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  return (
    <main className="login">
      <section className="login__form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="auth__input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formInfo.username}
              onChange={handleChange}
              required
            />
            <FaUser className="auth__icon" />
          </div>
          <div className="auth__input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formInfo.password}
              onChange={handleChange}
              required
            />
            <FaLock className="auth__icon" />
          </div>
          <button type="submit" className="login__btn">
            Submit
          </button>
          <div className="link">
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="register-link">
                Register
              </Link>
            </small>
          </div>
          <div className="link">
            <small>
              Not interested in logging in?{" "}
              <Link to="/" className="register-link">
                Continue as Guest
              </Link>
            </small>
          </div>
        </form>
      </section>
      <img
        className="login__image"
        src={LoginImage}
        alt="login page"
        loading="lazy"
      ></img>
    </main>
  );
}

export default Login;
