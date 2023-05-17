import React, { useState } from "react";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfpassword, setCnfPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/userdata', {
    method: 'POST',
    body: JSON.stringify({
      name : name,
      email : email,
      password : password,
      cnfpassword : cnfpassword
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));

  localStorage.setItem("token", "userToken")

  setName('')
  setEmail('')
  setPassword('')
  setCnfPassword('')
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-5 mx-auto">
          <div className="card rounded-0 shadow mt-5">
            <div className="card-header">
              <h3 className="text-center text-uppercase mb-0">Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
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
                <div className="mb-3 mt-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-enter password"
                    value={cnfpassword}
                    onChange={(e) => {
                      setCnfPassword(e.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-success w-100 mt-2">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;