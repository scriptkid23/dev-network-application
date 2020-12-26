import {takeEvery,put,call} from 'redux-saga/effects';
import UserService from '../../services/user.service';

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
   
}