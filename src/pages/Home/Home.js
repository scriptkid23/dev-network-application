import React from 'react';
import {Navigation,Sidebar,Chat} from '../../components/Home';
import {useParams} from 'react-router-dom'
import ChatBodyNoMessage from '../../components/Home/Chat/ChatBodyNoMessage'
import Profile from '../../components/Home/Profile/Profile';
import Spirity from '../../helper/hook';
import { COMPONENT } from '../../constants/paths';

export function Home(){
    const params = useParams();
    const [screen,setScreen] = React.useState(COMPONENT.CHATS);
    const {store,_} = Spirity();
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


