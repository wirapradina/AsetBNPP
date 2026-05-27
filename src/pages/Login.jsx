import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // pindah ke dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="title">Login</h1>

        <p className="subtitle">
          Masukkan email dan password anda.
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>NIP / Email</label>

            <input
              type="text"
              placeholder="Enter your NIP / email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
            </div>
          </div>

          <button type="submit" className="login-button">
            Log in
          </button>
        </form>

      </div>
    </div>
  );
}