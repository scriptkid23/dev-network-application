import React, { Component } from 'react'
import Routers from '../routes';
import {getRoutes} from '../helper/helper'
import {connect} from 'react-redux';
import * as messageReducer from '../redux/reducers/message.reducer'
import * as homeReducer from '../redux/reducers/home.reducer'
import {bindActionCreators} from 'redux';
class Home extends Component { 
    componentDidMount(){
        this.props.getUserDetail.requested({
            updateNotification:this.props.updateNotification,
            updateChats : this.props.updateChats,
        });
        this.props.getListFriend.requested();
        this.props.getListMessageLog.requested();
        this.props.getListNotification.requested();
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
        updateChats: bindActionCreators(messageReducer.actions.updateChats,dispatch),
        updateNotification:bindActionCreators(messageReducer.actions.updateNotification,dispatch),
        getListFriend: bindActionCreators(messageReducer.actions.getListFriend,dispatch),
        getUserDetail:bindActionCreators(messageReducer.actions.getUserDetail,dispatch),
        getListMessageLog:bindActionCreators(messageReducer.actions.getListMessageLog,dispatch),
        getListNotification:bindActionCreators(messageReducer.actions.getListNotification,dispatch),
    })
}
const connectHome = connect(mapStateToProps,mapDispatchToProps)(Home);
export default connectHome