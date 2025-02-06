import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
/* NEED TO WORK ON THIS, why the error not showing up*/
function Login() {
  const [formInfo, setFormInfo] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/login",
        { username: formInfo.username, password: formInfo.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setError("");
        setFormInfo({ username: "", password: "" });
        navigate("/");
      } else {
        setError("Invalid password or username!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    setError("");
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
          {error && (
            <h3 className="link" style={{ color: "red" }}>
              {error}
            </h3>
          )}
          <div className="link">
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="register-link">
                Register
              </Link>
            </small>
          </div>
        </form>
      </section>

      <section className="login__image"></section>
    </main>
  );
}

export default Login;
