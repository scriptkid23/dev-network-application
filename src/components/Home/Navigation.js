import React from 'react'
import {Logo,Chats, Friends, Alert} from '../../assets/index'
export function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-group">
                <ul>
                    <li className="logo" >
                        <a href="/#"><Logo/></a>
                    </li>
                    <li>
                        <a href="/#" className="sidebar active">
                            <span className="badge badge-warning">&nbsp;</span>
                            <Chats/>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className="sidebar">
                            <span className="badge badge-warning">&nbsp;</span>
                            <Friends/>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className="sidebar">
                            <span className="badge badge-warning">&nbsp;</span>
                            <Alert/>
                        </a>
                    </li>
                    <li className="text-center" id="user-menu">
                    
                    </li>
                </ul>
            </div>
        </nav>
    )
}
