import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

export default function Reports(props) {

    const columns = [
        {
            title: 'Регион',
            dataIndex: 'territory',
            key: 'name',
            render: (text, record) => <Link to={"/reports/" + record.kopuk}>{text}</Link>,
        },
        {
            title: 'Количество библиотек',
            dataIndex: 'libraries',
            key: 'count',
            render: text => text,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.libraries - b.libraries,
        }];

    return <Table columns={columns} dataSource={props.reports} rowKey={"kopuk"} />
}