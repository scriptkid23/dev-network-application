import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

class WebSocketService{
    stompClient = null;
    mySubscribe = null;
    createRoom(payload){

    }
    getLogMessage(payload){

    }
    connect(token_message,username){
        var socket = new SockJS("https://capricorn-chat-serv.herokuapp.com/ws");
        this.stompClient = Stomp.over(socket);
        var that = this;
        var headers = {
            Authorization: token_message,
            Username: username,
        }
        
        this.stompClient.connect(headers,() => {
            console.log(id)
            that.stompClient.subscribe("/topic/workspace",(message)=>{
                console.log(message)
            })  
            that.stompClient.subscribe("/user/"+id+"/queue/notifications",(message) => {
                console.log(message)
                callback.updateNotification(JSON.parse(message.body))
            })

            that.stompClient.send("/app/workspace",{},JSON.stringify({
                "from":username,
                "text": "online",
            }))
        })


    }
    disconnect(){
        this.stompClient.disconnect();
    }
    sendMessage(payload){
        console.log(payload)
        this.stompClient.send("/app/chat", {},JSON.stringify(payload));
    }
    getStatusUser(payload){

    }
    getNotification(payload){

    }
    leaveRoom(channelId){
        this.mySubscribe.unsubscribe();
    }
    joinRoom({channelId,callback}){
        return this.mySubscribe = this.stompClient.subscribe(
            "/user/"+channelId+"/queue/messages",
            (message) => {
                    console.log(JSON.parse(message.body))
                    callback(JSON.parse(message.body))
            }
        )
    }
    sendNotification(payload){
        return this.stompClient.send("/app/notification",{},JSON.stringify(payload))
    }

}
export default new WebSocketService();
