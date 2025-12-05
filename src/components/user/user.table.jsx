import React, { useState } from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';

const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([
        { _id: "eric", fullName: 25, email: "hn" },
        { _id: "eric", fullName: 25, email: "hn" }
    ])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        // setDataUsers(res.data);
    }

    loadUser();

    return (
        <Table columns={columns} dataSource={dataUsers} />
    )
}

export default UserTable;