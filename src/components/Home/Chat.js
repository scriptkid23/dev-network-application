import React from 'react';

import {ChatHeader, ChatFooter,ChatBody} from './Chat/index'


export const Chat = ({channelId}) => {

    return (
        <div className="chat">
            <ChatHeader/>
            <ChatBody channelId = {channelId}/>
            <ChatFooter/>
        </div>
    );
}


