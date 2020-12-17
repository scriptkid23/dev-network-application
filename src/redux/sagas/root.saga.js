import {all} from 'redux-saga/effects';
import authSaga from './auth.saga'
function* rootSaga(){
    yield all([
        //TODO:
        ...authSaga(),
        
    ])
}
export default rootSaga;