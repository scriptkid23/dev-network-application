import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'; 
import Data from '../data.json';
import {useSelector,useDispatch} from 'react-redux'
import * as homeReducer from '../../../redux/reducers/home.reducer';
import {useHistory,useParams} from 'react-router-dom'
import AddGr from './AddGr';

export function Chats() {
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const homeAction = {...homeReducer.actions.sidebar}
    const homeStore  = useSelector(state => state.home) 
    const goToRoomId = (id) => {
        history.push(`/home/${id}`)
    }
    const setRoom = (id) => {
        dispatch(
            homeAction.setChannel(id)
        )
       goToRoomId(id);
    }
    const renderLogMessageList = (data) => {
        return data.contact.map((value,index) => {
            return (
                <li key={index} 
                    className={`list-group-item ${value.room_id === params.id
                        ? "open-chat" : ""}`}
                    onClick={() => setRoom(value.room_id)}>
                    <figure className="avatar avatar-state-success">
                    <img src="http://storage-3t.herokuapp.com/uploads/avatar/002-unicorn.svg" className="rounded-circle" alt="avatar"/>
                    </figure>
                    <div class="users-list-body">
                        <div>
                            <h5 className="">{value.room_name}</h5>
                            <p>{value.last_message}</p>
                        </div>
                        <div className="users-list-action">
                            <small className="text-muted">{value.created_at}</small>
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
                                {renderLogMessageList(Data)} 
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}
