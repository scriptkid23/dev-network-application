import React from 'react';
import {Navigation,Sidebar,Chat} from '../../components/Home';
import {useParams} from 'react-router-dom'
import ChatBodyNoMessage from '../../components/Home/Chat/ChatBodyNoMessage'
import Profile from '../../components/Home/Profile/Profile';
import websocketService from '../../services/websocket.service';
import Spirity from '../../helper/hook';
import { API, COMPONENT } from '../../constants/paths';
import Axios from 'axios';
import { get } from '../../helper/helper';

export function Home(){
    const params = useParams();
    const {store,action} = Spirity();
    const [screen,setScreen] = React.useState(COMPONENT.CHATS);

    
    return (
        <>
            <Navigation 
              screen = {screen} 
              setScreen = {(screen) => setScreen(screen)}
            />  
            <Sidebar screen={screen}/>  
            {params.id ? 
              <Chat 
                channelId = {params.id}
              /> :
              <ChatBodyNoMessage/>
            }
            <Profile/>
        </>
    );
}


