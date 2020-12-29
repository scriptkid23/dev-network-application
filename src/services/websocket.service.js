import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
class WebSocketService{
    stompClient = null;
    createRoom(payload){

    }
    getLogMessage(payload){

    }
    connect(){
        var socket = new SockJS("http://localhost:8000/ws");
        this.stompClient = Stomp.over(socket);
        var headers = {
            Authorization: localStorage.getItem("token_message"),
            Username: localStorage.getItem("username")
        }
        this.stompClient.connect(headers,function(frame){
            console.log("Connected!")
            console.log(frame)
        })

    }
    disconnect(payload){

    }
    sendMessage(payload){

    }
    getStatusUser(payload){

    }
    getNotification(payload){

    }
    leaveRoom(payload){

    }
    joinRoom(payload){

    }

}
export default new WebSocketService();