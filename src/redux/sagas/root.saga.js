import {all} from 'redux-saga/effects';
import authSaga from './auth.saga'
import homeSaga from './home.saga'
function* rootSaga(){
    yield all([
        //TODO:
        ...authSaga(),
        ...homeSaga(),
    ])
}
export default rootSaga;