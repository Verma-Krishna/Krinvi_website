import {call,put,takeLatest} from 'redux-saga/effects'
import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../Constants/Constant';
import { signupSuccess, signupFailure } from '../Actions/Signupaction';


const user ={
  signup: (username,email,password) => axios.post("http://localhost:8080/register",{username,email,password})

}

function* signupSaga(action) {
  try {
    let response = yield call(user.signup,action.payload.username,action.payload.email,action.password);
    console.log("signup",response)
    yield put(signupSuccess(response.data));
  } catch (error) {
    // console.log('error',error)
    yield put(signupFailure(error.response?.data?.message || 'Signup failed'));
  }
}


function* watchSignupSaga() {
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
}

export default watchSignupSaga;
 