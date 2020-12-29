import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { convertTime } from '../../../helper/helper';


export function ChatBody({uid,messages}) {
    
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
    const renderMessageLog = () => {
        
        return messages && messages.map((value,index) => {
            return(
                <div className={`message-item ${value.user.id === uid  ? "outgoing-message" : null}`}>
                    <div className="message-avatar">
                        <figure className="avatar">
                            <img src={value.user.avatar} alt="avatar"/>
                        </figure>
                        <div>
                            <h5>{value.user.first_name+" "+value.user.last_name}</h5>
                            <div className="time">{convertTime(value.created_at)}<i className="ti-double-check text-info"></i></div>
                        </div>
                    </div>
                    <div className="message-content">
                        <div>{value.message}</div>
                    </div>
                </div>
            )
        })
    }
    return (
        <PerfectScrollbar containerRef={ref => setScrollEl(ref)}>
            <div className="chat-body">
                <div  className="messages">
                  {renderMessageLog()}
                </div>
            </div>
        </PerfectScrollbar>
    )
}
