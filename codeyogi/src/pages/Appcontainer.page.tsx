import { FC, memo } from "react";
import AuthHero from "../components/AuthHero";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./lecture.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
    return (
      <div className="flex flex-row">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div>
          <Switch>
            <Route path="/dashboard">
              <DashboardPage></DashboardPage>
            </Route>
            <Route path="/lecture">
              <LecturePage></LecturePage>
            </Route>
            <Route path="/Recording">
              <RecordingsPage></RecordingsPage>
            </Route>
          </Switch>
        </div>
      </div>
    );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
