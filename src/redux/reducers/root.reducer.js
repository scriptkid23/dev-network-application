import {combineReducers} from 'redux';
import {nestedCombineReducers} from 'nested-combine-reducers';
import authReducer from './auth.reducer';
import homeReducer from './home.reducer'
import messageReducer from './message.reducer'
const rootReducer = nestedCombineReducers({
  //TODO:Reducer
  auth: authReducer,
  home: homeReducer,
  message: messageReducer,
},combineReducers);

export default rootReducer;