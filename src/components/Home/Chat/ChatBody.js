import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
export function ChatBody({message,guid}) {
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
    return (
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
    )
}
