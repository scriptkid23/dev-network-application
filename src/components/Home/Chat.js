import React from 'react';
import Spirity from '../../helper/hook';
import {ChatHeader, ChatFooter,ChatBody} from './Chat/index'


export const Chat = ({channelId}) => {
    const [uid,setUid] = React.useState(null);
    const {store,action} = Spirity();

    const updateMessage = (payload) => {
        action.updateMessage(payload)
    }
    React.useEffect(() => {
        let isSubcribe = true;
        
        if(isSubcribe && store.messageStore.user_detail.id){
            action.getMessageLog({channelId:channelId,callback:updateMessage});
        }
        return function cleanUp(){
            isSubcribe = false;
            action.leaveRoom(channelId);
        };
            
    },[store.messageStore.user_detail.id])
 
   
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


