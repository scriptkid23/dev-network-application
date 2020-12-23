import React from 'react'
import {Link} from 'react-router-dom'


import { useForm } from "react-hook-form";
import {ShowAlert,Backdrop} from '../../components/common/index';
import Spirity from '../../helper/hook'
export function PasswordRecovery() {
    
    const {store,action} = Spirity();
    var authStore = store.authStore;
 
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        action.forgot(data)
    };
    return (
        <div className="container d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            {authStore.loading && <Backdrop show = {authStore.loading ? true : false}/>}
            <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4 ">
                    <h1 className="font-weight-semibold"> Forgot Password</h1>
                    <p className="text-dark mb-3">Enter your email address to reset password</p>
                    <form className="mb-3">
                        <div className="form-group">
                            <input
                             
                                required
                                type="email"
                                name="email"
                                className="form-control form-control-md"
                                id="email" placeholder="Enter your email"
                                ref={register({ required: true})}
                                />
                        </div>
                    </form>
                    <button
                        className="btn btn-lg btn-block btn-primary  text-uppercase font-weight-semibold"
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                    >SEND RESET LINK </button>
                    <div>
                        <br></br>
                    <p className="text-dark mb-3">Already have an account?
                    <Link to="/auth/login" className="font-weight-semibold">Sign in</Link>
                    </p>
                    </div>
                    <ShowAlert
                        show={authStore.variant.length !== 0 ? true : false}
                        variant={authStore.variant}
                        notification = {authStore.message}
                    />
                </div>

            </div>
           

        </div>
    )
}
