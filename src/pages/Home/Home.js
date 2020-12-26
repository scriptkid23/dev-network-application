import React from 'react';
import {Navigation,Sidebar,Chat} from '../../components/Home';
import {useParams} from 'react-router-dom'
import ChatBodyNoMessage from '../../components/Home/Chat/ChatBodyNoMessage'
import Profile from '../../components/Home/Profile/Profile';
import websocketService from '../../services/websocket.service';
import Spirity from '../../helper/hook';

export function Home(){
    const params = useParams();
    const {store,action} = Spirity();
    

    return (
        <>
          <Navigation/>  
            <Sidebar/>  
            {params.id ? 
            <Chat channelId = {params.id}/> :
            <ChatBodyNoMessage/>
            }
            <Profile/>
        </>
    );
}


