import React from "react";
import { Descriptions, Divider } from "antd";

export const Description = ({ report }) => (
  <>
    <Divider>
      <h1>{report.territory}</h1>
    </Divider>
    <Descriptions bordered>
      <Descriptions.Item span={3} label="Отчетная организация">
        {report.fullname}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="Адрес">
        {report.address}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="Источник данных">
        {report.formname}
      </Descriptions.Item>
      <Descriptions.Item label="Количество библиотек">
        {report.libraries}
      </Descriptions.Item>
      <Descriptions.Item label="Классификатор организаций, предприятий и учреждений культуры">
        {report.kopuk}
      </Descriptions.Item>
      <Descriptions.Item label="Период">{report.period}</Descriptions.Item>
    </Descriptions>
  </>
);
