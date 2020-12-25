import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Spirity from '../../../helper/hook';

export function ChatBody({channelId}) {
    const {store,action} = Spirity();
    
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
                  
                </div>
            </div>
        </PerfectScrollbar>
    )
}
