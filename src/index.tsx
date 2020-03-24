import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import { Global as GlobalStyles } from '@emotion/core';

import 'react-toastify/dist/ReactToastify.css';

import useUserContext from 'hooks/useUserContext';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import { GlobalContextProvider } from './globalContext';
import globalStyles from './globalStyles';

const toastProps: ToastContainerProps = {
  hideProgressBar: true,
  position: 'top-center',
};

const App: FC = () => {
  const contextValue = useUserContext();

  return (
    <GlobalContextProvider value={contextValue}>
      <GlobalStyles styles={globalStyles} />
      <ToastContainer {...toastProps} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </GlobalContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
