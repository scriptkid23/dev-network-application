import React from 'react';
import Spirity from '../../helper/hook';
import {ChatHeader, ChatFooter,ChatBody} from './Chat/index'


export const Chat = ({channelId}) => {
    const [uid,setUid] = React.useState(null);
    const {store,action} = Spirity();
    React.useEffect(() => {
            action.getMessageLog(channelId);
            setUid(store.authStore.user_detail.id)
    },[])
    console.log(store.authStore)
    
    return (
        <div className="chat">
            <ChatHeader/>
            <ChatBody messages={store.messageStore.message_log.messages} uid={uid}/>
            <ChatFooter channelId={channelId}/>
        </div>
    );
}


