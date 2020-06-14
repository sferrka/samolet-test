import React from "react";
import { Row, Card, Statistic, Divider } from "antd";

export const StatsCopying = ({ report }) => (
  <div className="app-stats-block">
    <Divider>
      <h3> Услуги копирования </h3>
    </Divider>
    <Row>
      <Card bodyStyle={{ display: "flex", textAlign: "center" }}>
        <Statistic
          style={{ width: "33%" }}
          title="Копий"
          value={report.copies}
          suffix={`/ ${report.copies_issued}`}
        />
        <Divider type="vertical" style={{ height: "auto" }} />
        <Statistic
          style={{ width: "33%" }}
          title="В т.ч. детям"
          value={report.copies_issued_children}
        />
        <Divider type="vertical" style={{ height: "auto" }} />
        <Statistic
          style={{ width: "33%" }}
          title="Электронно"
          value={report.copies_electronic}
        />
      </Card>
    </Row>
  </div>
);
