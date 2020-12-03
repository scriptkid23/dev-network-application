import React, { Component } from 'react'
import Routers from '../routes';
import {getRoutes} from '../helper/helper'
export default class Auth extends Component {
    render() {
        return (
            <div className="d-block bg-light">
                {getRoutes(Routers)}
            </div>
        )
    }
}