import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {AddGroup} from '../../../assets/index'
import {useHistory,useParams} from 'react-router-dom'
import Spirity from '../../../helper/hook'
import { convertTime } from '../../../helper/helper'
import AddGr from './AddGr'
export function Chats() {
    const history = useHistory();  
    const params = useParams();
    const {store,action} =Spirity();
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
    const goToRoomId = (id) => {
        history.push(`/home/${id}`)
    }
    
    const setRoom = (id) => {
        action.setChannel(id);
        goToRoomId(id);
    }
    const exportTitle = (data) => {
        if(data.member.length > 2){
            return data.title;
        }
        else{
            let ownerId = store.messageStore.user_detail.id;
            let result = data.member.filter(value => value.id !== ownerId);
            return result[0].first_name +" "+result[0].last_name;
        }
    }
    const exportAvatar = (data) => {
        let ownerId = store.messageStore.user_detail.id;
        let result = data.member.filter(value => value.id !== ownerId);
        return result[0].avatar;
    }
  
    const renderListMessageLog = (data) => {
        console.log(data)
        return data
        .sort((data1,data2)=>{return compareObjects(data1,data2,'created_at')})
        .map((value,index) => {
            return (
                <li key={index} 
                    className={`list-group-item ${value.channel_id === params.id
                        ? "open-chat" : ""}`}
                    onClick={() => setRoom(value.channel_id)}>
                    <figure className="avatar avatar-state-success">
                    <img src={exportAvatar(value)} className="rounded-circle" alt="avatar"/>
                    </figure>
                    <div class="users-list-body">
                        <div>
                            <h5 className="">{exportTitle(value)}</h5>
                            <p>{value.message}</p>
                        </div>
                        <div className="users-list-action">
                            <small className="text-muted">
                            {convertTime(value.created_at)}
                            </small>
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
                        <span>Chats</span>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <div>
                                    {/* <button className="btn btn-outline-light" id="Tooltip-Add-Group">                                          
                                            <AddGr/>    
                                    </button> */}
                                    <AddGr/> 
                                </div>
                            </li>
                        </ul>
                    </header>  
                <form>
                    <input type="text" className="form-control" placeholder="Search chats"/>
                </form>
                <div className="sidebar-body">
                        <PerfectScrollbar>
                            <ul className="list-group list-group-flush">
                                {renderListMessageLog(store.messageStore.list_message_log)} 
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}
