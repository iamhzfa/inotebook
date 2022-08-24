import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./login.css";

function Login() {

  let navigate = useNavigate();
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({email:"", password:""})


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    console.log(json)

    if(json.success){
      //save the auth token and redirect to home page
      navigate('/')
    }
    else{
      alert("Invalid details")
    }

  };
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form className="vh-120" onSubmit={handleSubmit}>
      <div className="container py-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-light text-dark" style={{borderRadius: "1rem"}}>
              <div className="card-body p-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-4">
                  <h2 className="fw-bold text-uppercase mb-5">Login</h2>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={Credential.email}
                      onChange={onChange}
                      placeholder="Enter your email"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={Credential.password}
                      onChange={onChange}
                      placeholder="Enter your password"
                      className="form-control form-control-lg"
                    />
                  </div>

                  {/* <p className="small pb-lg-2">
                    <Link className="text-dark" to="#!">
                      Forgot password?
                    </Link>
                  </p> */}

                  <button
                    className="btn btn-outline-dark px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className="">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-dark fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
