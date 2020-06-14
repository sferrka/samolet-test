import React from "react";
import { Row, Col, Card, Statistic, Divider } from "antd";

export const StatsFinancial = ({ report }) => (
  <div className="app-stats-block">
    <Divider>
      <h3>Финансовая информация (в тыс. руб.) </h3>
    </Divider>
    <Row gutter={20}>
      <Col span={8}>
        <Card>
          <Statistic
            title="Израсходовано средств"
            value={report.funds_used}
            suffix={`/ ${report.funds}`}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Средств получено / из бюджета"
            value={report.funds_acquisition}
            suffix={`/ ${report.funds_budget}`}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="По виду деятельности"
            value={report.funds_entrepreneurial}
            suffix={`/ ${report["funds_main_activity,_thousand_rubles"]}`}
          />
        </Card>
      </Col>
    </Row>
  </div>
);
