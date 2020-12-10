import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {AddGroup, NewChat, ThreeDot} from '../../assets/index'
export function Sidebar() {
    return (
        <div className="sidebar-group">
            <div className="sidebar active">
                    <header>
                        <span>Chats</span>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <div>
                                    <button className="btn btn-outline-light" id="Tooltip-Add-Group">                                          
                                            <AddGroup/>    
                                    </button>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <button className="btn btn-outline-light" id="Tooltip-New-Chat">
                                    <NewChat/>
                                </button>
                            </li>
                        </ul>
                    </header>  
                <form>
                    <input type="text" className="form-control" placeholder="Search chats"/>
                </form>
                <div className="sidebar-body">
                        <PerfectScrollbar>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item open-chat">
                                    <figure className="avatar avatar-state-success">
                                    <img src="http://storage-3t.herokuapp.com/uploads/avatar/002-unicorn.svg" className="rounded-circle" alt="avatar"/>
                                    </figure>
                                    <div class="users-list-body">
                                        <div>
                                            <h5 className="">Townsend Seary</h5>
                                            <p>What's up, how are you?</p>
                                        </div>
                                        <div className="users-list-action">
                                            <small className="text-muted">03:41 PM</small>
                                            <div class="action-toggle">
                                                <div class="dropdown">
                                                    <span aria-haspopup="true" className="" aria-expanded="false">
                                                    <ThreeDot/>
                                                    </span>
                                                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                        <button type="button" tabindex="0" role="menuitem" className="dropdown-item">Profile</button>
                                                        <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}
