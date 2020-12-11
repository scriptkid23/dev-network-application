import { handleActions, createActions } from 'redux-actions';
import {COMPONENT} from '../../constants/paths'
export const actions = createActions({
    //TODO:
    "NAVIGATION":{
        "SET_COMPONENT": [meta => meta, payload => payload],
    }

});
const defaultState = {
   "navigation": COMPONENT.CHATS,
   
}
const reducers = handleActions({
        [actions.navigation.setComponent] : (state,actions) => {
            return {
                ...state,
                navigation: actions.payload,

            }
        }

},
    defaultState
)
export default reducers;