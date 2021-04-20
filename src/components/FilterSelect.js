import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default ( {options, onChange }) => {

  const handleChange = (value) => {
    onChange(value)
  }

  return (
    <>
      <Select defaultValue="any" style={{ width: 120 }} onChange={handleChange}>
        { options
          ? options.map((option, i) => {
            return (
              <Option key={`${i}-${option}`} value={option.toLowerCase()}>{option}</Option>
            )
          })
          : <Option value="disabled" disabled>
            No options available.
          </Option>
        }
      </Select>
    </>
  )

}