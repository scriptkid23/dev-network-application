import React, { Component } from 'react'
import './auth.style.css'
export default class Auth extends Component {
    render() {
        return (
            <div className="main-layout card-bg">
                {this.props.children}
            </div>
        )
    }
}
