import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {

  let navigate = useNavigate();
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({name: "", email:"", password:""})


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({name, email, password})
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
                <div className="mb-md-2 mt-md-3 pb-4">
                  <h2 className="fw-bold text-uppercase mb-4">signup</h2>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={onChange}
                      placeholder="Enter your name"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
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
                      onChange={onChange}
                      placeholder="Set your password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline form-white mb-5">
                    <input
                      type="password"
                      id="cpassword"
                      name="cpassword"
                      onChange={onChange}
                      placeholder="Confirm your password"
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
                    Create Account
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signup
