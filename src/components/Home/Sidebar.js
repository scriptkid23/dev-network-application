import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {AddGroup, NewChat} from '../../assets/index'
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
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}
