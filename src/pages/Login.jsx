import React from 'react';
import { connect } from "react-redux";

import { loginAction } from '../store/auth/action';
import LoginForm from '../components/auth-form';

const Login = ({ loginAction, userData, loginError, loading }) => {
   const handleLogin = values => {
      loginAction(values)
   };

   return (
      <div className="login-container">
         <h4>Sign in</h4>

         <div className="login-form-container">
            <LoginForm
               loginAction={handleLogin}
               userData={userData}
               loginError={loginError}
               loading={loading}
            />
         </div>
      </div>
   );
};

const mapStateToProps = state => ({
   userData: state.authReducer.userData,
   loginError: state.authReducer.loginError,
   loading: state.authReducer.loading
});

const mapDispatchToProps = {
   loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);