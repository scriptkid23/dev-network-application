import React from 'react'
import { Link } from "react-router-dom";
export function Signin() {
    return (
        <div className="container d-flex flex-column">
    <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <h1 className="font-weight-bold">Sign in</h1>
            <p className="text-dark mb-3">We are Different, We Make You Different.</p>
            <form className="mb-3" >
                <div className="form-group">
                    <label for="email" className="sr-only">Email Address</label>
                    <input 
                    formControlName = "email"
                    required
                    type="email"
                    className="form-control form-control-md" 
                    id="email" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label for="password" className="sr-only">Password</label>
                    <input 
                    formControlName = "password"
                    type="password" 
                    required
                    className="form-control form-control-md" 
                    id="password" placeholder="Enter your password"/>
                </div>
                <div className="form-group d-flex justify-content-end">
                    <Link className="font-size-sm" to="/auth/password/recovery">Reset password</Link>
                </div>
                <button 
                    className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold" 
                    type="submit">Sign in

                </button>
            </form>
            <p>Don't have an account? <Link className="font-weight-semibold" to="/auth/register">Sign up</Link>.</p>
        </div>
        </div>
        </div>
    )
}
