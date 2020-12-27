import React, { Component } from 'react'
import Routers from '../routes';
import {getRoutes} from '../helper/helper'
import {connect} from 'react-redux';
import * as messageReducer from '../redux/reducers/message.reducer'
import * as homeReducer from '../redux/reducers/home.reducer'
import {bindActionCreators} from 'redux';
class Home extends Component { 
    componentDidMount(){
        console.log("redner home layout component")
        this.props.getUserDetail.requested();
        this.props.getListFriend.requested();
      
       
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
const mapStateToProps = state => {return{home: state.home,auth:state.auth}};
const mapDispatchToProps = dispatch => {
    return({
        getListFriend: bindActionCreators(messageReducer.actions.getListFriend,dispatch),
        getUserDetail:bindActionCreators(messageReducer.actions.getUserDetail,dispatch)
    })
}
const connectHome = connect(mapStateToProps,mapDispatchToProps)(Home);
export default connectHome