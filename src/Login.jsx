import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let loginCheck = () => {
    if (username.current.value === "sathvika" && password.current.value === "sathvika@123") {
      dispatch(login(username.current.value));
      navigate("/home");
    } else {
      alert("Your Credentials are wrong. Check once!");
    }
  };

  return (
    <div className="container mt-8">
      <div className="row justify-content-center">
      <div className="card shadow-lg h-100 border-primary rounded">
      <div className="card-header bg-white text-white">
            <h2 className="text-center text-primary mb-4">Login Page</h2>
            <div className="mb-3">
              <label className="form-label text-danger fw-bold" >Username</label>
              <input type="text" ref={username} className="form-control" placeholder="Enter username" />
            </div>
            <div className="mb-3">
              <label className="form-label text-success fw-bold">Password</label>
              <input type="password" ref={password} className="form-control" placeholder="Enter password" />
            </div>
            <button onClick={loginCheck} className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
