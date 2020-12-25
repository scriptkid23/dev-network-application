import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {NewChat} from '../../../assets/index'
import Spirity from '../../../helper/hook'
import FriendsDropdown from './FriendDropdown';

export function Friends() {
 
    
    const {store,action} = Spirity();
    console.log(store.messageStore.list_friend)
    
    const renderFriendsList = (data) => {
            // TODO: 
            return data.map((data,index) => {
                return(
                    <li className="list-group-item" key={index}>
                        <figure className="avatar"> 
                            <img src={data.avatar} className="rounded-circle" alt="avatar"/>
                        </figure>
                        <div className="users-list-body">
                        <div>
                            <h5>{data.first_name+" "+data.last_name}</h5>
                            <p>{data.email}</p>
                            </div>
                        </div>
                        <div className="users-list-action">
                            <div className="action-toggle">
                                <FriendsDropdown user = {data}/>
                            </div>
                        </div>
                    </li>
                )
            })
        
    }
    return (
        <div className="sidebar-group">
            <div className="sidebar active">
                    <header>
                        <span>Friends</span>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="btn btn-outline-light" id="Tooltip-New-Chat">
                                    <NewChat/>
                                </button>
                            </li>
                        </ul>
                    </header>  
                <form>
                    <input type="text" className="form-control" placeholder="Search friends"/>
                </form>
                <div className="sidebar-body">
                        <PerfectScrollbar>
                            <ul className="list-group list-group-flush">
                               {renderFriendsList(store.messageStore.list_friend)}
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}
