import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {AddGroup, NewChat} from '../../../assets/index'
import Spirity from '../../../helper/hook'
import NotificationDropdown from './NotificationDropdown'
export function Notifications() {
    function compareObjects(object1, object2, key) {
    const obj1 = object1[key]
    const obj2 = object2[key]
  
    if (obj1 > obj2) {
      return -1
    }
    if (obj1 < obj2) {
      return 1;
    }
    return 0;
  };

    const {store,action} = Spirity();
    const renderNotificationsList = (data) => {
        // TODO:
        console.log(data.reverse())
        return data
        .sort((data1,data2)=>{return compareObjects(data1,data2,'id')})
        .map((data,index) => {
            return(
                <li className="list-group-item" key={index}>
                    <figure className="avatar">
                        <img 
                            src="http://storage-3t.herokuapp.com/uploads/avatar/013-unicorn.svg"
                            className="rounded-circle" alt="avatar"
                        />
                    </figure>
                    <div className="users-list-body">
                        <div>
                            <h5>{data.sender_from}</h5>
                            <p>{data.content}</p>
                        </div>
                        <div className="users-list-action">
                            <div className="action-toggle">
                                <NotificationDropdown data={data}/>
                            </div>
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
                        <span>Notification</span>
                    </header>  
                <form>
                    <input type="text" className="form-control" placeholder="Search notifications"/>
                </form>
                <div className="sidebar-body">
                        <PerfectScrollbar>
                            <ul className="list-group list-group-flush">
                               {renderNotificationsList(store.messageStore.list_notification)}
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}
