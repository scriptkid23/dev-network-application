import { handleActions, createActions } from 'redux-actions';
import {COMPONENT} from '../../constants/paths'
export const actions = createActions({
  
    "UPDATE_MESSAGE": [meta => meta, payload => payload],
    "UPDATE_NOTIFICATION":[meta => meta, payload => payload],
    "UPDATE_CHATS":[meta => meta, payload => payload],
    "GET_LIST_FRIEND": {
        "REQUESTED" : [meta => meta, payload => payload],
        "SUCCEEDED" : [meta => meta, payload => payload],
        "FAILED":     [meta => meta, payload => payload]
    },
    "GET_MESSAGE_LOG":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED":[meta => meta, payload => payload],
        "FAILED":[meta => meta, payload => payload],
    },
    "SEND_MESSAGE":{
        "REQUESTED" : [meta => meta, payload => payload],
        "SUCCEEDED" : [meta => meta, payload => payload],
        "FAILED":     [meta => meta, payload => payload]
    },
    "SEND_NOTIFICATION":{
        "REQUESTED" : [meta => meta, payload => payload],
        "SUCCEEDED" : [meta => meta, payload => payload],
        "FAILED":     [meta => meta, payload => payload]
    },
    "GET_USER_DETAIL": {
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "JOIN_ROOM":[meta => meta, payload => payload],
    "LEAVE_ROOM":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "GET_LIST_MESSAGE_LOG":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "GET_LIST_NOTIFICATION":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "ACCEPT_FRIEND":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "CREATE_CONVERSATION":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "GET_PROFILE":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "EDIT_PROFILE":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
   
    
    
    

});
const defaultState = {
    "user_detail": {},
    "list_friend":[],
    "message_log":{
        "messages":[],
    },
    "list_notification":[],
    "list_message_log": [],
  "get_user_detail": false,
   
}
const reducers = handleActions({
    [actions.updateChats]: (state,actions) => {
        console.log(actions.payload)
        return({
            ...state,
        })
    },
    [actions.editProfile.requested]: (state,action) => {
        return({
            ...state,

        })
    },
    [actions.editProfile.succeeded]: (state,action) => {
        return({
            ...state,

        })
    },
    [actions.editProfile.failed]: (state,action) => {
        return({
            ...state,

        })
    },

    [actions.getProfile.requested]: (state,action) => {
        return({
            ...state,
        })
    },
    [actions.getProfile.succeeded]: (state,action) => {
        return({
            ...state,
        })
    },
    [actions.getProfile.failed]: (state,action) => {
        return({
            ...state,
        })
    },

    [actions.createConversation.requested]: (state,action) => {
        return({
            ...state,
        })
    },
    [actions.createConversation.succeeded]: (state,action) => {
        return({
            ...state,
        })
    },
    [actions.createConversation.failed]: (state,action) => {
        return({
            ...state,
        })
    },

    [actions.acceptFriend.requested]: (state,action) => {
        return({
            ...state,
        })
    },
    [actions.acceptFriend.succeeded]: (state,action) => {
        return({
            ...state,
        })
    },
    [actions.acceptFriend.failed]: (state,action) => {
        return({
            ...state,
        })
    },

    [actions.getListNotification.requested]: (state,action) => {
        return({
            ...state,
        })
    },
    [actions.getListNotification.succeeded]: (state,action) => {
        return({
            ...state,
            list_notification:action.payload.data,
        })
    },
    [actions.getListNotification.failed]: (state,action) => {
        return({
            ...state,
        })
    },
    [actions.updateNotification]: (state, action) => {
        return({
            ...state,
            list_notification:[
                ...state.list_notification,
                action.payload
            ]
        })
    },
    [actions.sendNotification.requested]: (state,action) => {
        return ({
            ...state,
        })
    }, 
    [actions.sendNotification.succeeded]: (state, action) => {
        return({
            ...state,
        })
    },
    [actions.sendNotification.failed]: (state, action) => {
        return({
            ...state,
        })
    },
    [actions.getListMessageLog.requested] : (state,action) => {
        return({
            ...state,
        })
    },
    [actions.getListMessageLog.succeeded] : (state,action) => {
        return({
            ...state,
            list_message_log: action.payload.data,
        })
    },
    [actions.getListMessageLog.failed] : (state,action) => {
        return({
            ...state,
        })
    },
    [actions.leaveRoom.requested] : (state, action) => {
        return ({
            ...state
        })
    },
    [actions.leaveRoom.succeeded] : (state, action) => {
        return ({
            ...state
        })
    },
    [actions.leaveRoom.failed] : (state, action) => {
        return ({
            ...state
        })
    },

    [actions.updateMessage] : (state,action) => {
        console.log(actions.payload)
        return({
            ...state,
            message_log:{
                messages:[
                    ...state.message_log.messages,action.payload.data,
                ]
            }
        })
    },
    [actions.getUserDetail.requested] : (state,action) => {
        return({
            ...state,
            loading : true,
            
        })
    },
    [actions.getUserDetail.succeeded] : (state,action) => {
        return({
            ...state,
            loading : false,
            user_detail : action.payload.data,
            status_code: action.payload.status,
            token_message:action.payload.tokenMessage.data,
            "get_user_detail": true,

        })

    },
    [actions.getUserDetail.failed] : (state,action) => {
        return({
            ...state,
            loading : false,
            message : "Get user detail failed",
            variant : "danger",
            status_code: action.payload.status,
            "get_user_detail": false,
        })
    },
        [actions.sendMessage.requested] : (state,actions) => {
            return{
                ...state,   
            }
        },
        [actions.sendMessage.succeeded] : (state,actions) => {
           
            return{
                ...state,
              
            }
        },
        [actions.sendMessage.failed] : (state,actions) => {
            return{
                ...state,
            }
        },

        [actions.getListFriend.requested]: (state,actions) => {
            return{
                ...state,
                loading:true,
            }
        },
        [actions.getListFriend.succeeded]: (state,actions) => {
            return{
                ...state,
                loading:false,
                list_friend: actions.payload.data,
           
            }
        },
        [actions.getListFriend.failed]: (state,actions) => {
            return{
                ...state,
                loading:false,
                list_friend: [],
            }
        },
        // 
        [actions.getMessageLog.requested]: (state,actions) => {
            return{
                ...state,
                loading:true,
            }
        },
        [actions.getMessageLog.succeeded]: (state,actions) => {
            return{
                ...state,
                loading:false,
                message_log:actions.payload.data,
           
            }
        },
        [actions.getMessageLog.failed]: (state,actions) => {
            return{
                ...state,
                loading:false,
                list_friend: [],
                message_log:[]
                        }
        },

},
    defaultState
)
export default reducers;