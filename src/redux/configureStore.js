import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/root.reducer';
import rootSaga from './sagas/root.saga';
import createSagaMiddleware from 'redux-saga' ;
import {createLogger} from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        loggerMiddleware,
    )
)
sagaMiddleware.run(rootSaga);
export default store;