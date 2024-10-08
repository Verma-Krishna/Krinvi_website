import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './Reducer/Rootreducer';
import rootSaga from './Saga/Rootsaga';


const sagaMiddleware = createSagaMiddleware();



const Store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);

export default Store;
