
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import AppcontainerPage from './pages/Appcontainer.page';
import AuthPage from './pages/Auth.page';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/auth/login"></Redirect>
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
