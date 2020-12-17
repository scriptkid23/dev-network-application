import {takeEvery,put,call,select} from 'redux-saga/effects';
import Auth from '../../layouts/Auth';
import AuthService from '../../services/auth.service';
import CookieService from '../../services/cookie.service';

function* loginRequested(params){
    try{
        const {data, status} = yield call(AuthService.login,params.payload.credentials);
        if(status === 200){
            yield put({type : "LOGIN/SUCCEEDED",payload : {data,status}})
            CookieService.set("token",data.token);
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
          params.payload.callback.push("/home")
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

export default function* authSaga(){
    yield takeEvery("LOGIN/REQUESTED",loginRequested)
    yield takeEvery("FORGOT/REQUESTED",forgotRequested)
    yield takeEvery("CONFIRM/REQUESTED",confirmRequested)
}