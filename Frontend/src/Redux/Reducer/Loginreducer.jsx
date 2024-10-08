// loginReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Constants/Constant';

const initialState = {
  loginloading: false,
  loginuser: null,
  loginerror: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loginloading: true, loginerror: null };
    
    case LOGIN_SUCCESS:
      return { ...state, loginloading: false, loginuser: action.payload, loginerror: null };
    
    case LOGIN_FAILURE:
      return { ...state, loginloading: false, loginuser: null, loginerror: action.payload };
    
    default:
      return state;
  }
};

export default loginReducer;
