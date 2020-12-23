import React  from 'react'
import { Link} from 'react-router-dom'
import Spirity from '../../helper/hook'
import { useForm } from "react-hook-form";
import {ShowAlert,Backdrop} from '../../components/common/index';


export function Signup() {

  const { store, action } = Spirity();
  var authStore = store.authStore;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    action.register(data)
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
          <h1 className=" text-dark font-weight-bold">Sign up</h1>
          <p className="text-dark mb-3">We are Different, We Make You Different.</p>
          <form class="mb-3">
            <div className="form-group">
              <label for="firstname" className="sr-only">First Name</label>
              <input formControlName="firstname"
                required
                name="first_name"
                type="text" className="form-control form-control-md" id="firstname" placeholder="Enter your first name"
                ref={register({ required: true })} />
            </div>
            <div className="form-group">
              <label for="lastname" className="sr-only">Last Name</label>
              <input formControlName="lastname"
                required
                name="last_name"
                type="text" class="form-control form-control-md" id="lastname" placeholder="Enter your last name"
                ref={register({ required: true })} />
            </div>
            <div className="form-group">
              <label for="email" className="sr-only">Email Address</label>
              <input formControlName="email"
                required
                name="email"
                type="email" className="form-control form-control-md" id="email" placeholder="Enter your email"
                ref={register({ required: true })} />
            </div>
            <div className="form-group">
              <label for="password" className="sr-only">Password</label>
              <input formControlName="password"
                required
                name="password"
                type="password" className="form-control form-control-md" id="password" placeholder="Enter your password"
                ref={register({ required: true })} />
            </div>
            <button className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
              type="submit"
              onClick={handleSubmit(onSubmit)} >
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

