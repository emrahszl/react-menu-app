import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-window">
        <form className="login-form" onSubmit={handleLogin}>
          <img
            src="https://www.pngmart.com/files/21/Account-User-PNG.png"
            width={150}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-options">
            <div className="form-remember">
              <input type="checkbox" />
              Remember me
            </div>
            <a href="">Forgot Password?</a>
          </div>
          <button className="form-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
