import React from 'react';
import { Redirect } from 'react-router-dom'
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'

import Spinner from '../spinner'

const LoginForm = ({
   errors, touched,
   loginError, loading
}) => {
   const _renderMessage = message => (
      <span style={{color: 'tomato'}}> { message }</span>
   );

   const userId = localStorage.getItem('userId');

   return (
      <Form>
         <div>
            <Field type="email" name="email" placeholder="Email"/>
            { touched.email && errors.email && _renderMessage(errors.email) }
         </div>
         <div>
            <Field type="password" name="password" placeholder="Password"/>
            { touched.password && errors.password && _renderMessage(errors.password) }
         </div>

         <div>
            {loginError && _renderMessage(loginError)}
            {loading && <Spinner />}
            {userId && <Redirect to="/" />}
         </div>

         <div>
            <button type="submit" disabled={loading}>Submit</button>
         </div>
      </Form>
   )
};

export default withFormik({
   mapPropsToValues: () => ({
      email: '',
      password: ''
   }),
   validationSchema: Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required()
   }),
   handleSubmit: (values, { props }) => {
      props.loginAction(values);
   }
})(LoginForm);