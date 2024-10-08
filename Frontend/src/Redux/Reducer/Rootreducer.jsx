import { combineReducers } from 'redux';
import signupReducer from './Signupreducer';
import loginReducer from './Loginreducer';


const RootReducer = combineReducers({
  signup: signupReducer,
  login:loginReducer
});

export default RootReducer;
