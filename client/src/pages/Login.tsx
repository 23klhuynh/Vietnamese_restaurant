import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Login() {
  return (
    <main className="login">
      <section className="login__form">
        <form action="">
          <h1>Login</h1>
          <div className="login__input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="login__icon"/>
          </div>
          <div className="login__input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="login__icon"/>
          </div>
          <button type="submit" className="login__btn">
            Submit
          </button>
          <div className="register">
            <small>
              Don't have an account? <Link to="register" className="register-link">Register</Link>
            </small>
          </div>
        </form>
      </section>

      <section className="login__image"></section>
    </main>
  );
}

export default Login;
