import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {AddGroup, NewChat} from '../../../assets/index'
import Data from '../data.json';
export function Friends() {
    const renderFriendsList = (data) => {
            // TODO: 
        
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
                               {renderFriendsList()}
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}
