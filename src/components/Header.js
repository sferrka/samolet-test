import React from "react";
import { Layout, Row, Col } from "antd";
import { FundProjectionScreenOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
export const AppHeader = () => (
  <Header className="app-header">
    <Row>
      <Col span={24}>
        <Link to="/">
          <FundProjectionScreenOutlined /> Библиотеки РФ. Статистическая
          информация
        </Link>
      </Col>
    </Row>
  </Header>
);
