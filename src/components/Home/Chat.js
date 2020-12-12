import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import {ThreeDot, Send,Emoji} from '../../assets/index';
import {Dropdown, Button} from 'react-bootstrap';
import { Picker } from 'emoji-mart'
import {message} from './data.json'
const CustomToggle = React.forwardRef(({children,onClick},ref) => (
    <span
        ref={ref}
        onClick = {(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </span>
))
const CustomMenu = React.forwardRef(({children,style,className},ref) =>{
    return(
        <div
         ref={ref}
         style={{backgroundColor:"#222"}}
         className={className}
        >
            {children}
        </div>
    )
})
export const Chat = () => {
    const [scrollEl, setScrollEl] = React.useState();
    const [guid,setGuid] = React.useState("01");
    React.useEffect(() => {
        if (scrollEl) {
            scrollEl.scrollTop = scrollEl.scrollHeight;
        }
    }, [scrollEl]);
    React.useEffect(() => {
        if (scrollEl) {
            setTimeout(() => {
                scrollEl.scrollTop = scrollEl.scrollHeight;
            }, 100)
        }
    });
    const profileActions = () => {
        //TODO:
    }
    
    return (
        <div className="chat">
            <div class="chat-header">
                <div class="chat-header-user">
                <figure class="avatar avatar-state-success">
                    <img src="http://storage-3t.herokuapp.com/uploads/avatar/006-unicorn.svg" alt="avt-room" />                
                </figure>
                <div>
                    <h5>Townsend Seary</h5>
                    <small class="text-muted"><i>5 minutes ago</i></small>
                </div>
                </div>
                <div class="chat-header-action">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}>
                                    <Button variant="light">
                                        <ThreeDot/>
                                    </Button>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item onClick={profileActions}>Profile</Dropdown.Item>
                                    <Dropdown.Item>Add to archive</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item>Block</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                        </li>
                    </ul>
                </div>
            </div>
            <PerfectScrollbar containerRef={ref => setScrollEl(ref)}>
                <div className="chat-body">
                    <div  className="messages">
                        {message.map((value,index) => {
                            return(
                                <div className={`message-item ${value.guid === guid ? "outgoing-message" : null}`}>
                                    <div className="message-avatar">
                                        <figure className="avatar">
                                            <img src={value.avatar} alt="avatar"/>
                                        </figure>
                                        <div>
                                            <h5>{value.username}</h5>
                                            <div className="time">{value.created_at}<i className="ti-double-check text-info"></i></div>
                                        </div>
                                    </div>
                                    <div className="message-content">
                                        <div>{value.message_content}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </PerfectScrollbar>
        
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


