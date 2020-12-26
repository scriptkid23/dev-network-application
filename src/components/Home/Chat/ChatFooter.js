import React from 'react'
import {Dropdown} from 'react-bootstrap'
import {CustomMenu, CustomToggle} from '../../common/index';
import {Send,Emoji} from '../../../assets/index';
import { Picker } from 'emoji-mart'
import Spirity from '../../../helper/hook';
import { useForm } from "react-hook-form";
export function ChatFooter({channelId}) {
    const {store, action } = Spirity();

    const { register, handleSubmit, reset } = useForm();
    const sendMessage =  ( data ,e) =>{ 
        
            action.sendMessage(channelId,data.message,"Text")
            reset();
    }
    return (
        <div class="chat-footer">
            <form onSubmit={handleSubmit(sendMessage)}>
               
                <input 
                ref={register({ required: true })}
                name="message"
                placeholder="Write a message." type="text" 
                className="form-control form-control"/>
                <div class="form-buttons">
                <button 
                onClick={handleSubmit(sendMessage)}
                class="btn btn-primary">
                    <Send/>
                </button>
                </div>
            </form>
        </div>  
    )
}
