import React from 'react'
import {Dropdown} from 'react-bootstrap'
import {CustomMenu, CustomToggle} from '../../common/index';
import {Send,Emoji} from '../../../assets/index';
import { Picker } from 'emoji-mart'

export function ChatFooter() {
    return (
        <div class="chat-footer">
            <form>
                <div>         
                    <Dropdown drop={"up"}>
                        <Dropdown.Toggle as={CustomToggle}>
                        <button title="Emoji" class="mr-3 btn btn-light">
                            <Emoji/>
                        </button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as={CustomMenu}
                        >
                                <Picker 
                                set='apple' style={{border:"none"}}
                                theme={"dark"}
                                />
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </div>
                <input placeholder="Write a message." type="text" 
                className="form-control form-control" value=""/>
                <div class="form-buttons">
                <button class="btn btn-primary">
                    <Send/>
                </button>
                </div>
            </form>
        </div>  
    )
}
