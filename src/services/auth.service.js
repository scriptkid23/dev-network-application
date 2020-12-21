import {API} from '../constants/paths';
import {get,del,post,put} from '../helper/helper'
import CookieService from './cookie.service'
class AuthService{

    login(payload){
        return post(API.SIGNIN,payload);
    }
    register(payload){
        return post(API.SIGNUP,payload);
    }
    forgot(payload){
        return post(API.FORGOT_PASSWORD,payload);
    }
    confirm(payload){
        return post(API.CONFIRM_TOKEN,payload);
    }
    getUserDetail(token){
        return post(API.ME,null,token);
    }
    logout(token){
        return del(API.LOGOUT,{token:token},token);
    }
}

export default new AuthService();