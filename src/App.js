import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import store from './store'
import Root from './components/root';
import ErrorBoundary from './components/error-boundary';



const App = () => {
   return (
      <Provider store={store}>
         <ErrorBoundary>
            <Router>
               <Root />
            </Router>
         </ErrorBoundary>
      </Provider>
   )
};

export default App;