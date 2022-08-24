import React from 'react';

function Signup() {

  const handleSubmit = (e) => {
    // editNote(text.id, text.utitle, text.utag, text.udescription)
    // refClose.current.click();
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
                      placeholder="Enter your name"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Set your password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline form-white mb-5">
                    <input
                      type="password"
                      id="cpassword"
                      name="cpassword"
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
