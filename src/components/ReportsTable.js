import React from "react";
import { Table, Input, Divider } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/actions";
import { SearchOutlined } from "@ant-design/icons";

export default function Reports(props) {
  const dispatch = useDispatch();

  const columns = [
    {
      title: (
        <Input
          prefix={<SearchOutlined />}
          type="text"
          onChange={(e) => dispatch(setFilter(e.target.value))}
          placeholder="Регион..."
        />
      ),
      dataIndex: "territory",
      key: "name",
      render: (text, record) => (
        <Link to={`/reports/${record.kopuk}`}>{text}</Link>
      ),
    },
    {
      title: "Количество библиотек",
      dataIndex: "libraries",
      key: "count",
      render: (text) => text,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.libraries - b.libraries,
      width: "30%",
      align: "right",
    },
  ];

  return (
    <div>
      <Divider>
        <h1>Данные по регионам</h1>
      </Divider>
      <Table bordered
        size="middle"
        pagination={{
          pageSizeOptions: ["10", "50", "100"],
          showSizeChanger: true,
          showTotal: (total) => `Всего: ${total} `,
        }}
        columns={columns}
        dataSource={props.reports}
        rowKey={"kopuk"}
      />
    </div>
  );
}
