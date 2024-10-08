import { call, put, takeLatest } from "redux-saga/effects";
import {  loginFailure,loginSuccess} from "../Actions/Loginaction";
import axios from "axios";
import { LOGIN_REQUEST } from "../Constants/Constant";

const user = {
   login: (email,password) => axios.post("http://localhost:8080/login",{email,password})
}

function* loginSaga(action) {
   try {

     let response = yield call(user.login,action.payload.email,action.payload.password)
     yield put(loginSuccess(response.data));
   } 
   catch (error) {
        yield put(loginFailure(error.response?.data?.message || 'Login failed'));
   }
 }
 

 
 function* watchLoginSaga() {
   yield takeLatest(LOGIN_REQUEST, loginSaga);
 }
 
 export default watchLoginSaga;
 




