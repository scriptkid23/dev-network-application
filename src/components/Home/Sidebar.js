import React from 'react'
import {Chats,Friends, Notifications} from './Sidebar/index'
import {useSelector,useDispatch} from 'react-redux'
import * as homeReducer from '../../redux/reducers/home.reducer';
import {COMPONENT} from '../../constants/paths'
export function Sidebar() {
    const homeStore  = useSelector(state => state.home) 
    console.log(homeStore)
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
            {renderSidebarComponent(homeStore.navigation)}
        </>
    )
}
