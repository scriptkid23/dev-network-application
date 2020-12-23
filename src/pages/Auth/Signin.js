import React from 'react'
import { Link } from "react-router-dom";
import Spirity from '../../helper/hook'
import { useForm } from "react-hook-form";
import { ShowAlert, Backdrop } from '../../components/common/index';

export function Signin() {
    const { store, action } = Spirity();
    var authStore = store.authStore;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        action.login(data)
    };

    return (
        <div className="container d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            {authStore.loading && <Backdrop show={authStore.loading ? true : false} />}

            <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                    <ShowAlert
                        show={authStore.variant.length !== 0 ? true : false}
                        variant={authStore.variant}
                        notification={authStore.message}
                    />
                    <h1 className="font-weight-bold">Sign in</h1>
                    <p className="text-dark mb-3">We are Different, We Make You Different.</p>
                    <form className="mb-3" >
                        <div className="form-group">
                            <label for="email" className="sr-only">Email</label>
                            <input formControlName="email"
                                required
                                name="email"
                                type="text"
                                ref={register({ required: true })}
                                className="form-control form-control-md"
                                id="email" placeholder="Enter your email" />

                        </div>
                        <div className="form-group">
                            <label for="password" className="sr-only">Password</label>
                            <input formControlName="password"
                                required
                                name="password"
                                type="text"
                                ref={register({ required: true })}
                                className="form-control form-control-md"
                                id="password" placeholder="Enter your password" />

                        </div>
                        <div className="form-group d-flex justify-content-end">
                            <Link className="font-size-sm" to="/auth/password/recovery">Reset password</Link>
                        </div>
                        <button
                            className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                            type="submit"
                            onClick={handleSubmit(onSubmit)} >
                            Sign in
                </button>
                    </form>
                    <p>Don't have an account? <Link className="font-weight-semibold" to="/auth/register">Sign up</Link>.</p>

                </div>
            </div>
        </div>
    )
}
