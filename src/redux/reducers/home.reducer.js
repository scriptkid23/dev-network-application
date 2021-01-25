import { handleActions, createActions } from 'redux-actions';
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
    "SET_HEADER_INFO":[meta => meta, payload => payload],
    
    

});
const defaultState = {
   "room_id": null,
   "profile_visibly":false,
   "loading":false,
   "header_info":{},
}
const reducers = handleActions({
        [actions.setHeaderInfo]: (state, actions) => {
            return({
                ...state,
                header_info:actions.payload
            })
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