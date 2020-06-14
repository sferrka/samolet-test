import { Row, Col, Statistic, Card, Divider } from "antd";
import React from "react";

export const StatsPeople = ({ report }) => (
  <div className="app-stats-block">
    <Divider>
      <h3>Статистические данные</h3>
    </Divider>
    <Row>
      <Col span={12}>
        <Card>
          <Statistic title="Абонентов" value={report.subscribers} prefix="" />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Сотрудников"
            value={report.employees_staff}
            suffix={`/ ${report.employees}`}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Детей / Всего пользователей"
            value={report.users_children}
            suffix={`/ ${report.users}`}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Зданий в управлении"
            value={report.buildings_management}
          />
        </Card>
      </Col>
    </Row>
  </div>
);
