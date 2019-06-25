import { call, put } from 'redux-saga/effects'
import { Auth } from "../../service";
import { loginSuccessAction, loginErrorAction, userDetailSuccessAction } from './action';

export function* loginSaga(action) {
   try {
      const response = yield call(Auth.login, action.payload);

      if (response.data.status) {
         localStorage.setItem('userId', response.data.data.user.id);
         localStorage.setItem('userName', response.data.data.user.name);

         yield put(loginSuccessAction(response.data.data.user));
      } else {
         throw response.data
      }
   } catch (error) {
      if (error.message === 'wrong data') {
         yield put(loginErrorAction(error.message))
      } else {
         console.log(error);
         yield put(loginErrorAction('Ошибка сервера'));
      }
   }
}

export function* userDetailSaga(action) {
   try {
      const response = yield call(Auth.getUser, action.payload);

      if (response.data.status) {
         yield put(userDetailSuccessAction(response.data.data))
      }
   } catch (error) {
      console.log(error);
   }
}

export function* logoutSaga() {
   yield localStorage.clear();
}