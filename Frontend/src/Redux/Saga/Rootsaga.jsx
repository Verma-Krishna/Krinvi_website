import { all } from 'redux-saga/effects';
import watchSignupSaga from './Signupsaga';
import watchLoginSaga from './Loginsaga'

export default function* rootSaga() {
  yield all([
    watchSignupSaga(),
    watchLoginSaga()
  ]);
}
