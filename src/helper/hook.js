import {useSelector,useDispatch} from 'react-redux'
import * as authReducer from '../redux/reducers/auth.reducer'
import * as homeReducer from '../redux/reducers/home.reducer'
import { useHistory} from "react-router-dom";
export default function Spirity(){
    const dispatch = useDispatch();
    const authAction = {...authReducer.actions}
    const homeAction = {...homeReducer.actions}
   
    const authStore = useSelector(state => state.auth);
    const homeStore  = useSelector(state => state.home);
    const history = useHistory();
    const login = data => {
        return dispatch(authAction.login.requested({data,callback:history}))
    }
    const register = data => {
        return dispatch(authAction.register.requested({data,callback:history}))
    }
    const forgot = data => {
        return dispatch(authAction.forgot.requested({data}))
    }
    function logout(){
        return dispatch(authAction.logout.requested({callback:history}))
    }
    function getUserDetail(){
        return dispatch(authAction.getUserDetail.requested({}));
    }
    function confirmToken(params){
        dispatch(authAction.confirm.requested({data:{token:params.key},callback:history}))
    }

    return{
        store:{authStore,homeStore},
        action:{login,register,forgot,
            logout,getUserDetail,confirmToken}
    }
}