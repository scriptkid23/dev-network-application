import React from 'react';
import Spirity from '../../helper/hook';
import {ChatHeader, ChatFooter,ChatBody} from './Chat/index'


export const Chat = ({channelId}) => {
    const [uid,setUid] = React.useState(null);
    const {store,action} = Spirity();

    React.useEffect(() => {
        let isSubcribe = true;
        
        if(isSubcribe && store.messageStore.user_detail.id){
            action.getMessageLog(channelId);
        }
        return function cleanUp(){
            isSubcribe = false;
        };
            
    },[store.messageStore.user_detail.id])
 
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


