import React, { Component } from 'react'
import Routers from '../routes';
import {getRoutes} from '../helper/helper'


export default class Home extends Component { 
  
    render() {
        return (
            <div className="layout">
                <div className="content">
                  
                    {getRoutes(Routers)}
                </div>      
                   
            </div>
        )
    }
}