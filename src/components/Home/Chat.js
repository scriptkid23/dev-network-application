import React from 'react';
import Spirity from '../../helper/hook';
import {ChatHeader, ChatFooter,ChatBody} from './Chat/index'


export const Chat = ({channelId}) => {
    const [messages,setMessages] = React.useState([]);
    const [uid,setUid] = React.useState(null);
    const {store,action} = Spirity();
    React.useEffect(() => {
            action.getMessageLog(channelId);
            setMessages(store.messageStore.message_log.messages)
            setUid(store.authStore.user_detail.id)
    },[])
    console.log(store.authStore)
    
    return (
        <div className="chat">
            <ChatHeader/>
            <ChatBody messages={messages} uid={uid}/>
            <ChatFooter/>
        </div>
    );
}


