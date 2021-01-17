import {useSelector,useDispatch} from 'react-redux'
import * as authReducer from '../redux/reducers/auth.reducer'
import * as homeReducer from '../redux/reducers/home.reducer'
import * as messageReducer from '../redux/reducers/message.reducer'
import { useHistory} from "react-router-dom";
export default function Spirity(){
    const dispatch = useDispatch();

    const authAction = {...authReducer.actions}
    const homeAction = {...homeReducer.actions}
    const messageAction = {...messageReducer.actions}

    const authStore = useSelector(state => state.auth);
    const homeStore  = useSelector(state => state.home);
    const messageStore = useSelector(state => state.message);

    const history = useHistory();
    const login = data => {
        return dispatch(authAction.login.requested({data,callback:history}))
    }
    const register = data => {
        return dispatch(authAction.signup.requested({data,callback:history}))
    }
    const forgot = data => {
        return dispatch(authAction.forgot.requested({data}))
    }
    function logout(){
        return dispatch(authAction.logout.requested({callback:history}))
    }
   
    function confirmToken(params){
        return dispatch(authAction.confirm.requested({data:{token:params.key},callback:history}))
    }
    function setComponent(component){
        return dispatch(homeAction.navigation.setComponent(component))
    }
    function getListFriend(){
        return dispatch(messageAction.getListFriend.requested({}));
    }
    function getMessageLog({channelId,callback}){
        dispatch(messageAction.getMessageLog.requested({data:channelId,callback:callback}))
    }
    const leaveRoom = (channelId) => {
        return dispatch(messageAction.leaveRoom.requested({data:channelId}))
    }

    function sendMessage({payload,callback}){
        
        return dispatch(messageAction.sendMessage.requested({
            data: payload,callback:callback,
        }))
    }
    function updateMessage(payload){
        return dispatch(messageAction.updateMessage({data:payload}))
    }
    function getListMessageLog(){
        return dispatch(messageAction.getListMessageLog.requested({}))
    }
    function setChannel(id){
        return dispatch(homeAction.sidebar.setChannel(id))
    }
    function addFriend(payload){
        return dispatch(messageAction.sendNotification.requested({data:payload}))
    }
    function updateNotification(payload){
        return dispatch(messageAction.updateNotification({data:payload}))
    }
    function acceptFriend(payload){
        return dispatch(messageAction.acceptFriend.requested({data:payload}))
    }
    function createConversation(payload){
        return dispatch(messageAction.createConversation.requested({data:payload,callback:history}))
    }
    return{
        store:{authStore,homeStore, messageStore},
        action:{login,register,forgot,
            createConversation,
            logout,confirmToken,
            acceptFriend,
            addFriend,updateNotification,
            getMessageLog,sendMessage,updateMessage,
            leaveRoom,getListMessageLog,setChannel,
            getListFriend,setComponent}
    }
}