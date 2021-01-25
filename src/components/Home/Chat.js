import React from 'react';
import { channel } from 'redux-saga';
import Spirity from '../../helper/hook';
import {ChatHeader, ChatFooter,ChatBody} from './Chat/index'


export const Chat = ({channelId}) => {
    const [uid,setUid] = React.useState(null);
    const {store,action} = Spirity();

    const updateMessage = React.useCallback((payload) => {
        action.updateMessage(payload)
    },[action])
    const getMessageLog = React.useCallback(({channelId,callback}) => {
        action.getMessageLog({channelId:channelId,callback:callback});
    },[action])

    const leaveRoom = React.useCallback((channelId) => {
        action.leaveRoom(channelId);
    },[action])

    React.useEffect(() => {
        let isSubcribe = true;
        if(isSubcribe && store.messageStore.user_detail.id){
            // action.getMessageLog({channelId:channelId,callback:updateMessage});
            getMessageLog({channelId:channelId,callback:updateMessage})
        }
        return function cleanUp(){
            isSubcribe = false;
            leaveRoom(channelId);
        };
            
    },[store.messageStore.user_detail.id])
 
    const exportInfoHeader = (data) => {
        return data.filter(value => value.channel_id === channelId)[0]
        
    }
    return (
        <div className="chat" >
            <ChatHeader info={exportInfoHeader(store.messageStore.list_message_log)} ownerId = {store.messageStore.user_detail.id}/>
            <ChatBody 
                messages={store.messageStore.message_log.messages} 
                uid={store.messageStore.user_detail.id}
            />
            <ChatFooter channelId={channelId}/>
        </div>
    );
}


