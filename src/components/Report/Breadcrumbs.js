import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumbs = ({ report }) => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Link to="/">Данные по регионам</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to={`/reports/${report.kopuk}`}>{report.territory}</Link>
    </Breadcrumb.Item>
  </Breadcrumb>
);
