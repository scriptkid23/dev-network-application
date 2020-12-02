import {combineReducers} from 'redux';
import {nestedCombineReducers} from 'nested-combine-reducers';
import authReducer from './auth.reducer'
const rootReducer = nestedCombineReducers({
  //TODO:Reducer
  auth: authReducer
},combineReducers);

export default rootReducer;