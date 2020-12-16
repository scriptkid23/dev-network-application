import React from 'react';
import {message} from './data.json'
import {ChatHeader, ChatFooter,ChatBody} from './Chat/index'


export const Chat = () => {

    return (
        <div className="chat">
            <ChatHeader/>
            <ChatBody message={message} guid={1}/>
            <ChatFooter/>
        </div>
    );
}


