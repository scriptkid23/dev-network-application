import {takeEvery,put,call,select,delay} from 'redux-saga/effects';
import UserService from '../../services/user.service';
import WebSocketService from '../../services/websocket.service'
import AuthService from '../../services/auth.service';
import { get } from '../../helper/helper';
import { API } from '../../constants/paths';

function* getListFriendRequested(params){
    try{
        const token = localStorage.getItem("token");
        const {data,status} = yield call(UserService.getListFriend,token);
        if(status === 200){
            yield put({type : "GET_LIST_FRIEND/SUCCEEDED",payload:{data,status}})
        }
        else{
            yield put({type : "GET_LIST_FRIEND/FAILED",payload : {data,status}})

        }
    }
    catch(e){
        yield put({type : "GET_LIST_FRIEND/FAILED",payload : e})

    }
 
}
// function* sendMessageRequested(params){
//     try{
//         const token = localStorage.getItem("token");
//         const {channelId,message} = params.payload.data;
//         const authStore = yield select(getAuthStore);
//         const messageStore = yield select(getMessageStore);
//         const {user_detail} = authStore;
//         console.log(channelId)
//         const {data,status} = yield call(UserService.sendMessage,channelId,message,"TEXT",token);
//         if(status === 200){
//             let message_state = {
//                         "guid":null,
//                         "message_type":"TEXT",
//                         "message":message,
//                         "attachments":[],
//                         "user":user_detail

//             }   
//             let newMessageLog = [...messageStore.message_log.messages,message_state]      
//             yield put({type : "SEND_MESSAGE/SUCCEEDED",payload:{newMessageLog,status}})
//         }
//         else{
//             yield put({type : "SEND_MESSAGE/FAILED",payload : {data,status}})
//         }
//     }
//     catch(e){
//         yield put({type : "SEND_MESSAGE/FAILED",payload:e})
//     }
// }
function* leaveRoomRequested(params){
    try {

        yield put({type : "LEAVE_ROOM/SUCCEEDED",payload:{}})
        WebSocketService.leaveRoom(params.payload.data)
    } catch (error) {
        yield put({type : "LEAVE_ROOM/FAILED",payload:{error}})
    }
}
function* sendMessage(params){
    try {

        yield put({type : "SEND_MESSAGE/SUCCEEDED",payload:{}})
        WebSocketService.sendMessage(params.payload.data)
    } catch (error) {
        yield put({type : "SEND_MESSAGE/FAILED",payload:{error}})
    }
}
function* getMessageLogRequested(params){
    try {
        const token = localStorage.getItem("token");
        const {data,status} = yield call(UserService.getMessageLog,params.payload.data,token);
        console.log(data)
        if(status === 200){
            yield put({type : "GET_MESSAGE_LOG/SUCCEEDED",payload:{data,status}})
            WebSocketService.joinRoom({channelId:params.payload.data,callback:params.payload.callback})   
        }
        else{
            yield put({type : "GET_MESSAGE_LOG/FAILED",payload : {data,status}})
        }
    } catch (error) {
            yield put({type : "GET_MESSAGE_LOG/FAILED",payload:error})
    }
}
function* getUserDetailRequested(){
    try{
        let token = localStorage.getItem("token")
        let {data,status} = yield call(get,API.ME,null,token);
        let tokenMessage = yield call(AuthService.getTokenMessage,token);
       
        
        if(status === 200){
            
            yield put({type : "GET_USER_DETAIL/SUCCEEDED",payload:{data,status,tokenMessage}})
            localStorage.setItem("status",status)
            WebSocketService.connect(tokenMessage.data,data.email)
            
        }
        else{
            yield put({type : "GET_USER_DETAIL/FAILED",payload:{data,status}})
            localStorage.removeItem("token");
        }
    }
    catch(e){
        yield put({type : "GET_USER_DETAIL/FAILED",payload : {data : {message : e}}})
        localStorage.removeItem("token");
    }
}
function* getListMessageLog() {
    try {
        let token = localStorage.getItem("token");
        const {data,status} = yield call(get,API.GET_LIST_MESSAGE_LOG,null,token);
        if(status === 200){
            yield put({type : "GET_LIST_MESSAGE_LOG/SUCCEEDED",payload:{data,status}})
        }
        else{
            yield put({type : "GET_LIST_MESSAGE_LOG/FAILED",payload :{data,status}})
        }
    } catch (error) {
        yield put({type : "GET_LIST_MESSAGE_LOG/FAILED",payload :error})
    }
}
export default function* homeSaga(){
    yield takeEvery("GET_LIST_FRIEND/REQUESTED",getListFriendRequested)
    yield takeEvery("GET_USER_DETAIL/REQUESTED",getUserDetailRequested)
    yield takeEvery("GET_MESSAGE_LOG/REQUESTED",getMessageLogRequested)
    yield takeEvery("SEND_MESSAGE/REQUESTED",sendMessage)
    yield takeEvery("LEAVE_ROOM/REQUESTED",leaveRoomRequested)
    yield takeEvery("GET_LIST_MESSAGE_LOG/REQUESTED",getListMessageLog)
}