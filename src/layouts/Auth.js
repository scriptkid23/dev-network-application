import React, { Component } from 'react'
import Routers from '../routes';
import {getRoutes} from '../helper/helper'
import '../styles/auth.style.css'
export default class Auth extends Component {
    render() {
        return (
            <div className="main-layout card-bg">
                {getRoutes(Routers)}
            </div>
        )
    }
}