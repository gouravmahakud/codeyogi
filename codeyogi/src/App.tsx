import { SIGPWR } from 'constants';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import AppcontainerPage from './pages/Appcontainer.page';
import AuthPage from './pages/Auth.page';
import DashboardPage from './pages/Dashboard.page';
import LoginPage from './pages/Login.page';
import SignupPage from './pages/Signup.page';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
        <Route path={["/auth/login", "/auth/signup"]} exact>
          <AuthPage></AuthPage>
        </Route>
        <Route path={["/dashboard", "/lecture", "/Recordings"]}>
          <AppcontainerPage></AppcontainerPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
