import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import background from "../assets/images/background.jpg";
import { loginUser } from "../services/ApiService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const user = await loginUser(email, password);
      console.log(user);
      
      toast.success("Login successful!", {
        position: "top-center", 
      });

      navigate("/"); 
    } catch (error) {
      console.error("Error during login:", error);

      toast.error("Login failed! Please check your credentials.", {
        position: "top-center", 
      });
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <div className="sugges">
            If you are not registered, please click on{" "}
            <Link to="/signup">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
