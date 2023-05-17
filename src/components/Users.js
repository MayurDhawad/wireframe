import React from "react";
// import { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Users = () => {
  // const [post, setPost] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("http://localhost:4000/userdata")
  //     .then((response) => response.json())
  //     .then((data) => setPost(data))
  //     .catch((err) => {
  //       console.log(err);
  //     }, []);
  // });

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <div className="container mt-4">
        Welcome! {auth.user}
        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
    </>
  );
};

export default Users;


/* <div className="container my-5">
        <ul className="list-group">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {post.map((post) => {
                return (
                  <tr>
                    <td key={post.id}>{post.name}</td>
                    <td key={post.id}>{post.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div> */
