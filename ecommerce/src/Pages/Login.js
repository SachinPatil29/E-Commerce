import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Meta title="Account" />
      <BreadCrumb title="Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      placeholder="Email" 
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
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Login</button>
                    <Link to="/signup" className="button signup">Signup</Link>
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

export default Login