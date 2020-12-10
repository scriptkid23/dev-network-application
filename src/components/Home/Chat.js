import React from 'react';
import {ThreeDot, Send} from '../../assets/index';
export const Chat = () => {
    return (
        <div className="chat">
        <div class="chat-header">
            <div class="chat-header-user">
            <figure class="avatar avatar-state-success">
                <img src="" alt="" />                
            </figure>
            <div>
                <h5>Townsend Seary</h5>
                <small class="text-muted"><i>5 minutes ago</i></small>
            </div>
            </div>
            <div class="chat-header-action">
                <ul class="list-inline">
                    <li class="list-inline-item" data-toggle="tooltip" title="Video call">
                        <div class="dropdown">
                            <span data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" class="">
                            <button class="btn btn-outline-light">
                                <ThreeDot/>
                            </button>
                            </span>
                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Profile</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
         <div class="chat-footer">
            <form>
                <div>
                    <button title="Emoji" class="mr-3 btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></button>
                    
                </div>
                <input placeholder="Write a message." type="text" class="form-control form-control" value=""/>
                <div class="form-buttons">
                <button class="btn btn-primary">
                    <Send/>
                </button>
                </div>
            </form>
        </div>   
        </div>
    );
}


