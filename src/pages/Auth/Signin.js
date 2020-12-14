import React from 'react'


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
                    <a className="font-size-sm" href="./reset-password.html">Reset password</a>
                </div>
                <button 
                    className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold" 
                    type="submit">Sign in

                </button>
            </form>
            <p>Don't have an account? <a className="font-weight-semibold" href="./signup.html">Sign up</a>.</p>
        </div>
    </div>
</div>
    )
}
