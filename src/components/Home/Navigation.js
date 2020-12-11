import React from 'react';
import {Logo,Chats, Friends, Alert} from '../../assets/index';
import {Dropdown} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {useSelector,useDispatch} from 'react-redux'
import * as homeReducer from '../../redux/reducers/home.reducer';
import {COMPONENT} from '../../constants/paths'
const CustomizeOverlayTrigger = (props) => {
    return <OverlayTrigger
    placement="right"
    overlay={
        <Tooltip>
            {props.title}
        </Tooltip>
    }
    >{props.children}</OverlayTrigger>
}
const CustomToggle = React.forwardRef(({children,onClick},ref) => (
    <span
        ref={ref}
        onClick = {(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </span>
))

export function Navigation() {
    const dispatch = useDispatch();
    const homeAction = {...homeReducer.actions.navigation}
    const homeStore  = useSelector(state => state.home) 
    
    const setComponent = (component) => {
            dispatch(homeAction.setComponent(component))
    }
    return (
        <nav className="navigation">
            <div className="nav-group">
                <ul>
                    <li className="logo" >
                        <a href="/#"><Logo/></a>
                    </li>
                    <li>
                       <CustomizeOverlayTrigger title={"Chats"}>
                            <a
                            className={`sidebar 
                            ${homeStore.navigation === COMPONENT.CHATS ? "active" : null} 
                            cursor-pointer`}
                            onClick = {() => setComponent(COMPONENT.CHATS)}
                            >
                                <span className="badge badge-warning">&nbsp;</span>
                                <Chats/>
                            </a>
                       </CustomizeOverlayTrigger>
                    </li>
                    <li>
                        <CustomizeOverlayTrigger title={"Friends"}>
                            <a className={`sidebar 
                            ${homeStore.navigation === COMPONENT.FRIENDS ? "active" : null} 
                            cursor-pointer`}
                            onClick = {() => setComponent(COMPONENT.FRIENDS)}
                            >
                                <span className="badge badge-warning">&nbsp;</span>
                                <Friends/>
                            </a>
                        </CustomizeOverlayTrigger>                     
                    </li>
                    <li>
                        <CustomizeOverlayTrigger title={"Notifications"}>
                            <a className={`sidebar 
                            ${homeStore.navigation === COMPONENT.NOTIFICATIONS ? "active" : null} 
                            cursor-pointer`}
                            onClick = {() => setComponent(COMPONENT.NOTIFICATIONS)}
                            >
                                <span className="badge badge-success">&nbsp;</span>
                                <Alert/>
                            </a>
                        </CustomizeOverlayTrigger>
                        
                    </li>
                    <li className="scissors text-center" id="user-menu">
                        <Dropdown drop="up" >
                            <Dropdown.Toggle as={CustomToggle}>
                                <figure className="avatar"> 
                                    <img src="http://storage-3t.herokuapp.com/uploads/avatar/002-unicorn.svg" 
                                    alt="avt-user" className="rounded-circle"/>
                                </figure>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Setting</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
