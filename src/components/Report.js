import React from "react";
import {
  Descriptions,
  Statistic,
  Col,
  Row,
  Divider,
  Card,
  Breadcrumb,
} from "antd";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Report() {
  const { id } = useParams();

  const report = useSelector((state) =>
    state.reports.items.find((item) => item.kopuk === id)
  );
  return report ? (
    <div>
      <Breadcrumbs report={report} />
      <Divider>
        <h1>{report.territory}</h1>
      </Divider>
      <Descriptions
        bordered
        title={
          <Card className="app-report-title">
            <p>
              <i>Отчетная организация:</i> {report.fullname}
            </p>
            <p>
              <i>Адрес:</i> {report.address}
            </p>
          </Card>
        }
      >
        <Descriptions.Item label="Количество библиотек">
          {report.libraries}
        </Descriptions.Item>
        <Descriptions.Item label="Классификатор организаций, предприятий и учреждений культуры">
          {report.kopuk}
        </Descriptions.Item>
        <Descriptions.Item label="Период">{report.period}</Descriptions.Item>
        <Descriptions.Item label="Источник данных">
          {report.formname}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
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
      <br />
      <br />
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
      <br />
      <br />
      <Divider>
        <h3> Услуги копирования </h3>
      </Divider>
      <Row>
        <Card bodyStyle={{ display: "flex" }}>
          <Statistic
            style={{ width: "33%" }}
            title="Копий"
            value={report.copies}
            suffix={`/ ${report.copies_issued}`}
          />
          <Statistic
            style={{ width: "33%" }}
            title="В т.ч. детям"
            value={report.copies_issued_children}
          />
          <Statistic
            style={{ width: "33%" }}
            title="Электронно"
            value={report.copies_electronic}
          />
        </Card>
      </Row>
    </div>
  ) : (
    <div>
      <h2>Данные по организации не найдены</h2>
    </div>
  );
}

const Breadcrumbs = ({ report }) => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Link to="/">Данные по регионам</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to={`/reports/${report.kopuk}`}>{report.territory}</Link>
    </Breadcrumb.Item>
  </Breadcrumb>
);
