import React from 'react';
import Spirity from '../../helper/hook';
import {ChatHeader, ChatFooter,ChatBody} from './Chat/index'
import WebsocketService from '../../services/websocket.service'

export const Chat = ({channelId}) => {
    const [uid,setUid] = React.useState(null);
    const {store,action} = Spirity();
    React.useEffect(() => {
        console.log("render chat component")

            action.getMessageLog(channelId);
            
            setUid(store.messageStore.user_detail.id)

      
    },[])
 
    console.log(store.messageStore)
    
    return (
        <div className="chat">
            <ChatHeader/>
            <ChatBody 
                messages={store.messageStore.message_log.messages} 
                uid={store.messageStore.user_detail.id}
            />
            <ChatFooter channelId={channelId}/>
        </div>
    );
}


