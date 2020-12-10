import React from 'react'
export function PasswordRecovery() {
    return (
        <div className="container d-flex flex-column">
            <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4 ">
                    <h1 className="font-weight-semibold"> Forgot Password</h1>
                    <p className="text-dark mb-3"> We Are Diffirent. We Make You Diffirent</p>
                    <form className="mb-3">
                        <div className="form-group">
                            {/*<label className="sr-only">Email Address</label>*/}
                            {/*<input className="form-control form-control-md" placeholder="Enter your email"/>*/}
                            <input
                                formControlName="email"
                                required
                                type="email"
                                className="form-control form-control-md"
                                id="email" placeholder="Enter your email"/>
                        </div>
                    </form>
                    <button
                        class="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                    type="submit">Submit</button>
                </div>

            </div>

        </div>
    )
}
