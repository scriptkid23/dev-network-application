import React from 'react'
import WorkChat from '../../../assets/work_chat.svg'
export default function ChatBodyNoMessage() {
    return (
        <div className="chat">
            <div className="chat-body no-message">
                <div className="no-message-container">
                    <div className="row mb-5">
                        <div className="col-md-4 offset-4">
                            <img src={WorkChat} className="img-fluid" alt="unselected"/>
                        </div>
                    </div>
                    <p className="lead">Select a chat to read messages</p>
                </div>
            </div>
        </div>
    )
}
