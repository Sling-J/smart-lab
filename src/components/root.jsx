import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Profile from '../pages/Profile';

const Root = () => {
   return (
      <Switch>
         <Route exact path="/login" component={Login} />
         <Route path="/" render={() => (
            localStorage.getItem('userId') ? ( <Profile /> ) : ( <Redirect to="/login" /> )
         )} />
      </Switch>
   )
};

export default Root;