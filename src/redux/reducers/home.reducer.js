import { handleActions, createActions } from 'redux-actions';
import {COMPONENT} from '../../constants/paths'
export const actions = createActions({
    //TODO:
    "NAVIGATION":{
        "SET_COMPONENT": [meta => meta, payload => payload],
    },
    "SIDEBAR":{
        "SET_CHANNEL":[meta => meta, payload => payload],
        
    },
    "CHAT":{
        "VIEW_PROFILE":[meta => meta, payload => payload],
        "CLOSE_PROFILE": [meta => meta, payload => payload],
    },
    "GET_LIST_FRIEND": {
        "REQUESTED" : [meta => meta, payload => payload],
        "SUCCEEDED" : [meta => meta, payload => payload],
        "FAILED":     [meta => meta, payload => payload]
    }
    

});
const defaultState = {
   "navigation": COMPONENT.CHATS,
   "room_id": null,
   "profile_visibly":false,
   "list_friend":[],
   "loading":false,
   
}
const reducers = handleActions({
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
        [actions.navigation.setComponent] : (state,actions) => {
            return {
                ...state,
                navigation: actions.payload,

            }
        },
        [actions.sidebar.setChannel] : (state,actions) => {
            return {
                ...state,
                room_id: actions.payload
            }
        },
        [actions.chat.viewProfile]:(state,actions) => {
            return{
                ...state,
                profile_visibly:true,
            }
        },
        [actions.chat.closeProfile]:(state,actions) => {
            return{
                ...state,
                profile_visibly:false,
            }
        },


},
    defaultState
)
export default reducers;