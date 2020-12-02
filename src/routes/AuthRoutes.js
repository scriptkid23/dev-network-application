import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import {Signin, Signup} from '../pages/Auth/index'
import AuthLayout from '../layouts/auth.layout'
export default  function AuthRoutes(){
    return(
        <AuthLayout>
            <Switch>
                <Route
                exact
                    path={"/signin"}
                    component={() => <Signin/>}
                />
                <Route
                exact
                    path={"/signup"}
                    component={() => <Signup/>}
                />
            </Switch>
        </AuthLayout>
    )
}