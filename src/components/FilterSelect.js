import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default ( {placeholder, options, onChange }) => {

  const handleChange = (value) => {
    onChange(value)
  }

  return (
    <>
      <Select placeholder={placeholder} className="filterSelect" onChange={handleChange}>
        { options
          ? options.map((option, i) => {
            const { label, value } = option
            return (
              <Option key={`${i}-${label}`} value={value}>{label}</Option>
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