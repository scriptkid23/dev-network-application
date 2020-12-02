import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import CookieService from '../services/cookie.service'
export default function AuthenticatedGuard(props) {
    const {isAuthenticated, Component, ...rest} = props;
    return (
       <Route
        {...rest}
        render={
            props => {
                if(!isAuthenticated && !CookieService.get("token")){
                    return <Redirect to="/signin"/>
                }
                return <Component {...props}/>
            }
        }
       />
    )
}