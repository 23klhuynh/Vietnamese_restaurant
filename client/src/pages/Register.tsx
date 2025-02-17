import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Register() {
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formInfo.password !== formInfo.confirmPassword ||
      !formInfo.username ||
      !formInfo.email
    ) {
      console.log("Invalid info");
      setError("The information is invalid. Please try again!");
      return; /* prevent submission */
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/register" /* when deploy need to change this for BACKEND */,
        {
          username: formInfo.username,
          email: formInfo.email,
          password: formInfo.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data === 200) {
        setError("Submission successful");
        setFormInfo({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      if (axiosError.response) {
        if (axiosError.response.status === 409) {
          setError("Account already exists!");
        } else if (axiosError.response.status === 400) {
          setError("Missing input!");
        } else {
          setError("An unexpected error occurred!");
        }
      }
    }
    /* MonsterLegend */
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  return (
    <main className="register">
      <section className="register__form">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="auth__input-box">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formInfo.username}
                onChange={handleChange}
                required
              />
              <FaUser className="auth__icon" />
            </div>
            <div className="auth__input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formInfo.email}
                onChange={handleChange}
                required
              />
              <MdEmail className="auth__icon" />
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
            <div className="auth__input-box ">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formInfo.confirmPassword}
                onChange={handleChange}
                required
              />
              <FaLock className="auth__icon" />
            </div>
            <button type="submit" className="register__btn">
              Submit
            </button>
            {error && (
              <h3 className="link" style={{ color: "red" }}>
                {error}
              </h3>
            )}
            <div className="link">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="login-link">
                  Sign In
                </Link>
              </small>
            </div>
          </form>
      </section>
    </main>
  );
}

export default Register;
