import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';


const Signup = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Name" 
                      />
                    </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      placeholder="Email" 
                    />
                  </div>
                  <div>
                      <input 
                        type="tel" 
                        name="mobile number" 
                        className="form-control" 
                        placeholder="Mobile Number" 
                      />
                    </div>
                  <div className="mt-1">
                    <input  
                      type="password" 
                      name="password" 
                      className="form-control" 
                      placeholder="Password" 
                    />
                  </div>
                </form>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup