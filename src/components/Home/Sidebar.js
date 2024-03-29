import React from 'react'
import {Chats,Friends, Notifications} from './Sidebar/index'
import {useSelector} from 'react-redux'

import {COMPONENT} from '../../constants/paths'
export function Sidebar({screen}) {
 
    const renderSidebarComponent = (key) => {
        switch (key) {
            case COMPONENT.CHATS:
                return <Chats/>
            case COMPONENT.FRIENDS:
                return <Friends/>
            case COMPONENT.NOTIFICATIONS:
                return <Notifications/>
            default:
                break;
        }
    }
    return (
        <>
            {renderSidebarComponent(screen)}
        </>
    )
}
