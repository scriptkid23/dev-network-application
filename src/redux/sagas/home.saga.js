import {takeEvery,put,call,select} from 'redux-saga/effects';
import UserService from '../../services/user.service';

const getAuthStore = (state) => state.auth;
const getMessageStore = (state) => state.message;
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
function* sendMessageRequested(params){
    try{
        const token = localStorage.getItem("token");
        const {channelId,message} = params.payload.data;
        const authStore = yield select(getAuthStore);
        const messageStore = yield select(getMessageStore);
        const {user_detail} = authStore;
        
        const {data,status} = yield call(UserService.sendMessage,channelId,message,"TEXT",token);
        if(status === 200){
            let message_state = {
                        "guid":null,
                        "message_type":"TEXT",
                        "message":message,
                        "attachments":[],
                        "user":user_detail

            }   
            let newMessageLog = [...messageStore.message_log.messages,message_state]      
            yield put({type : "SEND_MESSAGE/SUCCEEDED",payload:{newMessageLog,status}})
        }
        else{
            yield put({type : "SEND_MESSAGE/FAILED",payload : {data,status}})
        }
    }
    catch(e){
        yield put({type : "SEND_MESSAGE/FAILED",payload:e})
    }
}
function* getMessageLogRequested(params){
    try {
        const token = localStorage.getItem("token");
        const {data,status} = yield call(UserService.getMessageLog,params.payload.data,token);
        if(status === 200){
            yield put({type : "GET_MESSAGE_LOG/SUCCEEDED",payload:{data,status}})
        }
        else{
            yield put({type : "GET_MESSAGE_LOG/FAILED",payload : {data,status}})
        }
    } catch (error) {
            yield put({type : "GET_MESSAGE_LOG/FAILED",payload:error})
    }
}
export default function* homeSaga(){
    yield takeEvery("GET_LIST_FRIEND/REQUESTED",getListFriendRequested)
    yield takeEvery("GET_MESSAGE_LOG/REQUESTED",getMessageLogRequested)
    yield takeEvery("SEND_MESSAGE/REQUESTED",sendMessageRequested)
   
}