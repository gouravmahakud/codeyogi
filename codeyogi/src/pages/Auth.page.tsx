import { FC, memo } from "react";
import AuthHero from "../components/AuthHero";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
import {Route, Switch } from "react-router-dom";

interface Props { }

const Auth: FC<Props> = (props) => {
    return (
      <div className="flex flex-row justify-center">
        <Switch>
          <Route path="/auth/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/auth/signup">
            <SignupPage></SignupPage>
          </Route>
        </Switch>
        <AuthHero></AuthHero>
      </div>
    );
};

Auth.defaultProps = {};

export default memo(Auth);
