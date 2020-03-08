import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import { Global as GlobalStyles } from '@emotion/core';

import 'react-toastify/dist/ReactToastify.css';

import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';

import { GlobalContextProvider } from './globalContext';
import globalStyles from './globalStyles';
import HomePage from './views/HomePage';

const toastProps: ToastContainerProps = {
  hideProgressBar: true,
  position: 'top-center',
};

const App: FC = () => {
  const [userId, setUserId] = useState<string>('');

  const setId = (id: string): void => setUserId(id);

  const contextValue = {
    userId,
    setId,
  };

  return (
    <GlobalContextProvider value={contextValue}>
      <GlobalStyles styles={globalStyles} />
      <ToastContainer {...toastProps} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </GlobalContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
