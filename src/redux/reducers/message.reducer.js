import { handleActions, createActions } from 'redux-actions';
import {COMPONENT} from '../../constants/paths'
export const actions = createActions({
  
    "GET_LIST_FRIEND": {
        "REQUESTED" : [meta => meta, payload => payload],
        "SUCCEEDED" : [meta => meta, payload => payload],
        "FAILED":     [meta => meta, payload => payload]
    },
    "GET_MESSAGE_LOG":{
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED":[meta => meta, payload => payload],
        "FAILED":[meta => meta, payload => payload],
    }
    

});
const defaultState = {
  "list_friend":[],
  "message_log":[],
   
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