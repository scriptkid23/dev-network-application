import React from 'react'
import {Dropdown,Button} from 'react-bootstrap'
import {CustomToggle} from '../../common/CustomToggle'
import {ThreeDot} from '../../../assets/index';

import {useDispatch} from 'react-redux'
import * as homeReducer from '../../../redux/reducers/home.reducer';

export function ChatHeader() {
    const dispatch = useDispatch();
    const homeAction = {...homeReducer.actions.chat}
    const profileActions = () => {
        dispatch(homeAction.viewProfile())
    }
    return (
        <div class="chat-header">
            <div class="chat-header-user">
            <figure class="avatar avatar-state-success">
                <img src="http://storage-3t.herokuapp.com/uploads/avatar/006-unicorn.svg" alt="avt-room" />                
            </figure>
            <div>
                <h5>Townsend Seary</h5>
                <small class="text-muted"><i>5 minutes ago</i></small>
            </div>
            </div>
            <div class="chat-header-action">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle}>
                                <Button variant="light">
                                    <ThreeDot/>
                                </Button>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item onClick={profileActions}>Profile</Dropdown.Item>
                                <Dropdown.Item>Add to archive</Dropdown.Item>
                                <Dropdown.Item>Delete</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item>Block</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}
