import React from 'react';
import {Navigation,Sidebar,Chat} from '../../components/Home';
import {useParams} from 'react-router-dom'
import ChatBodyNoMessage from '../../components/Home/Chat/ChatBodyNoMessage'
import Profile from '../../components/Home/Profile/Profile';
export function Home(){
    const params = useParams();
    return (
        <>
          <Navigation/>  
            <Sidebar/>  
            {params.id ? 
            <Chat channelId = {params}/> :
            <ChatBodyNoMessage/>
            }
            <Profile/>
        </>
    );
}


