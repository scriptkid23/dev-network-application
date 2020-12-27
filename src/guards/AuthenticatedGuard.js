import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import Spirity from '../helper/hook'
import websocketService from '../services/websocket.service';

export default function AuthenticatedGuard(props) {
    const {isAuthenticated, component: Component, ...rest} = props;

    return (
       <Route
        {...rest}
        render={
            props => {
                if(!isAuthenticated && !localStorage.getItem("token")){
                    
                    return <Redirect to="/auth/login"/>
                }
                return <Component {...props}/>
            }
        }
       />
    )
}
