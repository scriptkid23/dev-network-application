import React, { Component } from 'react'
import Routers from '../routes';
import {getRoutes} from '../helper/helper'
import {Navigation,Sidebar} from '../components/Home'
import websocketService from '../services/websocket.service';

export default class Home extends Component { 
    componentDidMount(){
        websocketService.connect();
    }
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