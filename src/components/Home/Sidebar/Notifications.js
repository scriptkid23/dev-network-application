import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {AddGroup, NewChat} from '../../../assets/index'
import Data from '../data.json';
export function Notifications() {
    
    const renderNotificationsList = (data) => {
        // TODO:
        
    }
    return (
        <div className="sidebar-group">
            <div className="sidebar active">
                    <header>
                        <span>Notification</span>
                    </header>  
                <form>
                    <input type="text" className="form-control" placeholder="Search notifications"/>
                </form>
                <div className="sidebar-body">
                        <PerfectScrollbar>
                            <ul className="list-group list-group-flush">
                               {renderNotificationsList()}
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}
