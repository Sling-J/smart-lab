import { all, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, USER_DETAIL_REQUEST, LOGOUT } from './auth/constants';
import { loginSaga, userDetailSaga, logoutSaga } from './auth/saga';

function* rootSaga() {
   yield all([
      takeEvery(LOGIN_REQUEST, loginSaga),
      takeEvery(USER_DETAIL_REQUEST, userDetailSaga),
      takeEvery(LOGOUT, logoutSaga)
   ]);
}

export default rootSaga