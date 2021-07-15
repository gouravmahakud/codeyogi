import { FC, memo } from "react";
import AuthHero from "../components/AuthHero";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
    return (
      <div className="flex flex-row justify-between">
        <Sidebar></Sidebar>
            <Switch>
          <Route path="/dashboard">
            <DashboardPage></DashboardPage>
          </Route>
        </Switch>
        {/* <AuthHero></AuthHero> */}
      </div>
    );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
