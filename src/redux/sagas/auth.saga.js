import {takeEvery,put,call} from 'redux-saga/effects';
import { API } from '../../constants/paths';
import { post } from '../../helper/helper';
import AuthService from '../../services/auth.service';
import WebSocketService from '../../services/websocket.service'

function* registerRequested(params){
    try{
        const {data,status} = yield call(AuthService.register,params.payload.data);
        if(status === 200){
            yield put({type : "SIGNUP/SUCCEEDED",payload:{data,status}})
            localStorage.setItem("token",data.token);
            params.payload.callback.push("/home")
        }
        else{
            yield put({type : "SIGNUP/FAILED",payload:{data,status}})     
        }
         
    }catch(e){
        yield put({type : "SIGNUP/FAILED",payload:e})
    }
}
function* loginRequested(params){
    try{
        const {data, status} = yield call(AuthService.login,params.payload.data);
        if(status === 200){
            yield put({type : "LOGIN/SUCCEEDED",payload : {data,status}})
            localStorage.setItem("token",data.token);
            params.payload.callback.push("/home")
        }
        else{
            yield put({type : "LOGIN/FAILED",payload : {data,status}})
        }

    }
    catch(e){
        yield put({type : "LOGIN/FAILED",payload : {data : {message : e}}})
    }
}
function* logoutRequested(params){
    try{
        let token = localStorage.getItem("token")
        let {data,status} = yield call(AuthService.logout,token);
        if(status === 200){
            yield put({type : "LOGOUT/SUCCEEDED",payload:{data,status}})
            localStorage.removeItem("token")
            WebSocketService.disconnect();
            params.payload.callback.push("/auth/login")
        }
        else{
            yield put({type : "LOGOUT/FAILED",payload : {data,status}})
        }
    }
    catch(e){
        yield put({type : "LOGOUT/FAILED",payload : {data : {message : e}}})
    }
}

function* forgotRequested(params){
    try {
        let {data,status} = yield call(AuthService.forgot,params.payload.data);
      
        if(status === 200){
            yield put({type:"FORGOT/SUCCEEDED",payload:{data,status}})
        }
        else{
            yield put({type : "FORGOT/FAILED",payload : {data,status}})
        }
    } catch (error) {
        yield put({type : "FORGOT/FAILED",payload : {data : {message : error}}})
    }
}
function* confirmRequested(params){
    try{
      let {data,status} = yield call(AuthService.confirm,params.payload.data)
      if(status === 200){
          yield put({type : "CONFIRM/SUCCEEDED",payload:{data,status}})
         
          localStorage.setItem("token",params.payload.data.token)
          params.payload.callback.push("/auth/password/new")
      }
      else{
        yield put({type : "CONFIRM/FAILED",payload:{data,status}})
        params.payload.callback.push("/auth/login")
      }
    }
    catch(e){
        yield put({type : "CONFIRM/FAILED",payload : {data : {message : e}}})
    }
}
function* resetPassword(params){
    try {
        let token = localStorage.getItem("token");
        let body = params.payload.data;
        let {data,status} = yield call(post,API.RESET_PASSWORD,body,token);
        if(status === 200){
            params.payload.callback.push("/home");
            yield put({type : "RESET_PASSWORD/SUCCEEDED",payload:{data,status}})
        }
    } catch (error) {
        yield put({type:"RESET_PASSWORD/FAILED",payload:{error}})
    }
}

export default function* authSaga(){
    yield takeEvery("LOGIN/REQUESTED",loginRequested)
    yield takeEvery("FORGOT/REQUESTED",forgotRequested)
    yield takeEvery("CONFIRM/REQUESTED",confirmRequested)
    yield takeEvery("SIGNUP/REQUESTED",registerRequested)
    yield takeEvery("LOGOUT/REQUESTED",logoutRequested)
    yield takeEvery("RESET_PASSWORD/REQUESTED",resetPassword);
}