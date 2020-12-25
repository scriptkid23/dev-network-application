import {takeEvery,put,call} from 'redux-saga/effects';
import AuthService from '../../services/auth.service';


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
            localStorage.removeItem("token_message")
            localStorage.removeItem("username")
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
function* getUserDetailRequested(params){
    try{
        let token = localStorage.getItem("token")
        let {data,status} = yield call(AuthService.getUserDetail,token);
        let tokenMessage = yield call(AuthService.getTokenMessage,token);
        localStorage.setItem("token_message",tokenMessage.data)
        localStorage.setItem("username",data.email)

        if(status === 200){
            yield put({type : "GET_USER_DETAIL/SUCCEEDED",payload:{data,status}})
            localStorage.setItem("status",status)
        }
        else{
            yield put({type : "GET_USER_DETAIL/FAILED",payload:{data,status}})
            localStorage.removeItem("token");
        }
    }
    catch(e){
        yield put({type : "GET_USER_DETAIL/FAILED",payload : {data : {message : e}}})
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
    yield takeEvery("SIGNUP/REQUESTED",registerRequested)
    yield takeEvery("GET_USER_DETAIL/REQUESTED",getUserDetailRequested)
    yield takeEvery("LOGOUT/REQUESTED",logoutRequested)
}