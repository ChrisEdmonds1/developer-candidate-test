import React from 'react'
import { Table } from 'antd'

export default ({ data }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Sex',
      dataIndex: 'gender',
      key: 'sex',
    },
  ]

  return (<Table className="people-table" columns={columns} dataSource={data} pagination={false} />)
}
