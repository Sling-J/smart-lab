import {
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
   LOGIN_ERROR,
   USER_DETAIL_REQUEST,
   USER_DETAIL_SUCCESS,
   LOGOUT
} from './constants';

export const loginAction = dataOfForm => ({
   type: LOGIN_REQUEST,
   payload: dataOfForm
});

export const loginSuccessAction = data => ({
   type: LOGIN_SUCCESS,
   payload: {
      id: data.id,
      name: data.name
   }
});

export const loginErrorAction = error => ({
   type: LOGIN_ERROR,
   payload: error
});

export const userDetailRequestAction = (userId) => ({
   type: USER_DETAIL_REQUEST,
   payload: userId
});

export const userDetailSuccessAction = userData => ({
   type: USER_DETAIL_SUCCESS,
   payload: userData
});

export const logoutAction = () => ({
   type: LOGOUT
});