import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import * as authReducer from '../../redux/reducers/auth.reducer'

import { useForm } from "react-hook-form";
import {ShowAlert,Backdrop} from '../../components/common/index';
export function PasswordRecovery() {
    
    const dispatch = useDispatch();
    const authAction = {...authReducer.actions}
    const authStore  = useSelector(state => state.auth)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        dispatch(authAction.forgot.requested({data}))
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
