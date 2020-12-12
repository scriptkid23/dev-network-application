import { handleActions, createActions } from 'redux-actions';
import {COMPONENT} from '../../constants/paths'
export const actions = createActions({
    //TODO:
    "NAVIGATION":{
        "SET_COMPONENT": [meta => meta, payload => payload],
    },
    "SIDEBAR":{
        "SET_CHANNEL":[meta => meta, payload => payload],
    }

});
const defaultState = {
   "navigation": COMPONENT.CHATS,
   "room_id": null,
   
}
const reducers = handleActions({
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
        }

},
    defaultState
)
export default reducers;