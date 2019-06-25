import {
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
   LOGIN_ERROR,
   USER_DETAIL_REQUEST,
   USER_DETAIL_SUCCESS,
   LOGOUT
} from './constants';

const initialState = {
   userData: null,
   loginError: null,
   loading: null,
   userDetailData: null,
   userId: null
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case USER_DETAIL_REQUEST:
      case LOGIN_REQUEST:
         return {
            ...state,
            loading: true,
            loginError: null,
         };

      case LOGIN_SUCCESS:
         return {
            ...state,
            userData: action.payload,
            loading: false,
            loginError: null
         };

      case USER_DETAIL_SUCCESS:
         return {
            ...state,
            loading: false,
            userDetailData: action.payload
         };

      case LOGIN_ERROR:
         return {
            ...state,
            loading: false,
            loginError: action.payload
         };

      case LOGOUT:
         return {
            ...state,
            userData: null,
            loginError: null,
            userDetailData: null,
            userId: null
         }

      default:
         return state;
   }
};

export default authReducer