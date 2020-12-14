import React from 'react'
import {Link} from 'react-router-dom'
export function PasswordRecovery() {
    return (
        <div className="container d-flex flex-column">
            <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4 ">
                    <h1 className="font-weight-semibold"> Forgot Password</h1>
                    <p className="text-dark mb-3">Enter your email address to reset password</p>
                    <form className="mb-3">
                        <div className="form-group">
                            <input
                                formControlName="email"
                                required
                                type="email"
                                className="form-control form-control-md"
                                id="email" placeholder="Enter your email"/>
                        </div>
                    </form>
                    <button
                        class="btn btn-lg btn-block btn-primary  text-uppercase font-weight-semibold"
                    type="submit">SEND RESET LINK </button>
                    <div>
                        <br></br>
                    <p className="text-dark mb-3">Already have an account?
                    <Link to="/auth/login" className="font-weight-semibold">Sign in</Link>
                    </p>
                    </div>
                </div>

            </div>

        </div>
    )
}
