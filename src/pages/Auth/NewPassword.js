import React from 'react'
import { Link } from 'react-router-dom'
import Spirity from '../../helper/hook'
import { useForm } from "react-hook-form";
import { ShowAlert, Backdrop } from '../../components/common/index';


export function NewPassword() {

    const { store, action } = Spirity();
    var authStore = store.authStore;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
     
        if(data.password !== data.cfpassword){
            return
        }
        action.resetPassword(data);
    };
    
    return (
        <div className="container d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            {authStore.loading && <Backdrop show={authStore.loading ? true : false} />}
            <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4">

                    <h1 className=" text-dark font-weight-bold">RESET PASSWORD</h1>
                    <ShowAlert
                        show={authStore.variant.length !== 0 ? true : false}
                        variant={authStore.variant}
                        notification={authStore.message}
                    />
                    <p className="text-dark mb-3">We are Different, We Make You Different.</p>
                    <form class="mb-3">
                        <div className="form-group">
                            <label for="newpassword" className="sr-only">New Password</label>
                            <input 
                                required
                                name="password"
                                type="password" className="form-control form-control-md" id="newpassword" placeholder="Enter your new password"
                                ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label for="cfpassword" className="sr-only">Confirm Password</label>
                            
                            <input
                                required
                                name="cfpassword"
                                type="password" className="form-control form-control-md" id="cfpassword" placeholder="Enter your confirm password"
                                ref={register({ required: true})} />
                        </div>
                        <button 
                            
                            className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                            type="submit"
                            onClick={handleSubmit(onSubmit)} >
                            Submit
            </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

