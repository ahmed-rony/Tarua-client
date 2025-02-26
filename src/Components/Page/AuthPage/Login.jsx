import { useState } from "react";
import handleLogin from "../../Utils/auth/handleLogin";
import handleLogout from "../../Utils/auth/handleLogout";
import handleRegister from "../../Utils/auth/handleRegister"; // New function for registration
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Track registration mode
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(
      [
        setLoading,
        setIsLoginFailed,
        setResponseMessage,
        { username, password },
      ],
      navigate,
      location
    );
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(
      [
        setLoading,
        setIsLoginFailed,
        setResponseMessage,
        { username, password },
      ],
      navigate,
      location
    );
  };

  return (
    <div className="login container">
      <form className="login_form" onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoginFailed && <p style={{color:"orange"}}>{responseMessage}</p>}
        <button className="event_btn" type="submit" disabled={loading}>
          {isRegistering ? "Register" : "Login"}
        </button>

        {/* Toggle between login and register form */}
        <span type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering
            ? "Already have an account? Login"
            : "Create a new account"}
        </span>
      <button className="event_btn logout_btn" onClick={handleLogout}>Logout</button>
      </form>

      
    </div>
  );
}

export default Login;
