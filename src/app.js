import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Layout, Spin } from "antd";

import "./app.css";
import { fetchReportsIfNeeded } from "./redux/actions";
import { AppHeader } from "components/Header";
import { AppFooter } from "components/Footer";
import Report from "components/Report";
import Reports from "components/ReportsTable";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReportsIfNeeded());
  }, [dispatch]);

  const isFetching = useSelector((state) => state.reports.isFetching);
  const reports = useSelector((state) =>
    state.reports.items.filter(
      (i) => i.territory.toLowerCase().indexOf(state.filter) > -1
    )
  );

  const { Content } = Layout;

  return (
    <Layout>
      <AppHeader />
      <Content className="app-content">
        {isFetching ? (
          <Spin size="large" style={{ width: "100%" }} />
        ) : (
          <Switch>
            <Route exact path="/" children={<Reports reports={reports} />} />
            <Route path="/reports/:id" children={<Report />} />
          </Switch>
        )}
      </Content>
      <AppFooter />
    </Layout>
  );
}
