import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(user)
    navigate('/')
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-5 mx-auto">
          <div className="card rounded-0 shadow mt-5">
            <div className="card-header">
              <h3 className="text-center text-uppercase mb-0">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                    value={user}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
