import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import {ThreeDot, Send} from '../../assets/index';
import {Dropdown, Button} from 'react-bootstrap'
export const Chat = () => {
    const [scrollEl, setScrollEl] = React.useState();

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
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

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
                    <li class="list-inline-item" data-toggle="tooltip" title="Video call">
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
                                <Dropdown.Item divider/>
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
                    <div className="message-item outgoing-message">
                        <div className="message-avatar">
                            <figure className="avatar">
                                <img src="http://storage-3t.herokuapp.com/uploads/avatar/008-unicorn.svg" alt="avatar"/>
                            </figure>
                            <div>
                                <h5>Mirabelle Tow</h5>
                                <div class="time">01:20 PM<i class="ti-double-check text-info"></i></div>
                            </div>
                        </div>
                        <div class="message-content">
                            <div>I\'m fine, how are you <span role="img" aria-label="xxx">😃</span></div>
                        </div>
                    </div>
                    <div className="message-item">
                        <div className="message-avatar">
                            <figure className="avatar">
                                <img src="http://storage-3t.herokuapp.com/uploads/avatar/008-unicorn.svg" alt="avatar"/>
                            </figure>
                            <div>
                                <h5>Mirabelle Tow</h5>
                                <div class="time">01:20 PM<i class="ti-double-check text-info"></i></div>
                            </div>
                        </div>
                        <div class="message-content">
                            <div>I\'m fine, how are you <span role="img" aria-label="xxx">😃</span></div>
                        </div>
                    </div>
                    <div className="message-item">
                        <div className="message-avatar">
                            <figure className="avatar">
                                <img src="http://storage-3t.herokuapp.com/uploads/avatar/008-unicorn.svg" alt="avatar"/>
                            </figure>
                            <div>
                                <h5>Mirabelle Tow</h5>
                                <div class="time">01:20 PM<i class="ti-double-check text-info"></i></div>
                            </div>
                        </div>
                        <div class="message-content">
                            <div>I\'m fine, how are you <span role="img" aria-label="xxx">😃</span></div>
                        </div>
                    </div>
                    <div className="message-item">
                        <div className="message-avatar">
                            <figure className="avatar">
                                <img src="http://storage-3t.herokuapp.com/uploads/avatar/008-unicorn.svg" alt="avatar"/>
                            </figure>
                            <div>
                                <h5>Mirabelle Tow</h5>
                                <div class="time">01:20 PM<i class="ti-double-check text-info"></i></div>
                            </div>
                        </div>
                        <div class="message-content">
                            <div>I\'m fine, how are you <span role="img" aria-label="xxx">😃</span></div>
                        </div>
                    </div>
                    <div className="message-item">
                        <div className="message-avatar">
                            <figure className="avatar">
                                <img src="http://storage-3t.herokuapp.com/uploads/avatar/008-unicorn.svg" alt="avatar"/>
                            </figure>
                            <div>
                                <h5>Mirabelle Tow</h5>
                                <div class="time">01:20 PM<i class="ti-double-check text-info"></i></div>
                            </div>
                        </div>
                        <div class="message-content">
                            <div>I\'m fine, how are you <span role="img" aria-label="xxx">😃</span></div>
                        </div>
                    </div>
                    <div className="message-item">
                        <div className="message-avatar">
                            <figure className="avatar">
                                <img src="http://storage-3t.herokuapp.com/uploads/avatar/008-unicorn.svg" alt="avatar"/>
                            </figure>
                            <div>
                                <h5>Mirabelle Tow</h5>
                                <div class="time">01:20 PM<i class="ti-double-check text-info"></i></div>
                            </div>
                        </div>
                        <div class="message-content">
                            <div>I\'m fine, how are you <span role="img" aria-label="xxx">😃</span></div>
                        </div>
                    </div>
                    <div className="message-item outgoing-message">
                        <div className="message-avatar">
                            <figure className="avatar">
                                <img src="http://storage-3t.herokuapp.com/uploads/avatar/008-unicorn.svg" alt="avatar"/>
                            </figure>
                            <div>
                                <h5>Mirabelle Tow</h5>
                                <div class="time">01:20 PM<i class="ti-double-check text-info"></i></div>
                            </div>
                        </div>
                        <div class="message-content">
                            <div>I\'m fine, how are you <span role="img" aria-label="xxx">😃</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </PerfectScrollbar>
       
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


