import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Layout, Spin } from 'antd';
import './app.css';
import { fetchReportsIfNeeded } from './redux/actions';
import { Route, useParams, Switch } from 'react-router-dom';
import Reports from 'components/Reports';

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReportsIfNeeded());
  }, [dispatch]);

  const isFetching = useSelector(state => state.reports.isFetching)
  const reports = useSelector(state => state.reports.items)

  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header></Header>
      <Content>
        <Switch>
          <Route exact path="/" children={isFetching ? <Spin size="large" /> :
            <Reports reports={reports}/>} />
          <Route path="/reports/:id" children={<Report />} />
        </Switch>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}


function Report() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}