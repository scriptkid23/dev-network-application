import React from 'react'
import {  BrowserRouter as Router, Route, Link} from 'react-router-dom'



export function Signup() {
  const handleOnClick = () => {
    alert("Register Succeeded")
  } 

    return (
        <div className="">
           <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
           <div className="col-12 col-md-6 col-lg-5 col-xl-4">
           <h1 className=" text-primary font-weight-bold">Sign up</h1> 
           <p className="text-dark mb-3">We are Different, We Make You Different.</p>
           <form class="mb-3">
             <div className="form-group">
                    <label for="firstname" className="sr-only">First Name</label>
                    <input formControlName = "firstname"
                           required
                           type="text" className="form-control form-control-md" id="firstname" placeholder="Enter your firstname">
                    </input>
              </div>
             <div className="form-group">
                    <label for="lastname" className="sr-only">Last Name</label>
                    <input formControlName = "lastname"
                    required
                    type="text" class="form-control form-control-md" id="lastname" placeholder="Enter your lastname">
                      </input>
                </div>
                <div className="form-group">
                    <label for="email" className="sr-only">Email Address</label>
                    <input formControlName = "email"
                    required
                    type="email" className="form-control form-control-md" id="email" placeholder="Enter your email">
                </input>
                </div>
                <div className="form-group">
                    <label for="password" className="sr-only">Password</label>
                    <input formControlName = "password"
                    required
                    type="password" className="form-control form-control-md" id="password" placeholder="Enter your password">
                      </input>
                </div>
                <button className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                         type="submit"
                         onClick={() => handleOnClick()}>
                           Sign up
                         </button>
           </form>
           
           <p>Already have an account? <Link to="/auth/login" className="font-weight-semibold">Sign in</Link>.
           </p>
           </div>
           </div>
        </div>
    )
}
