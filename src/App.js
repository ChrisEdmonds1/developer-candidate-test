import React, { useState, useEffect } from 'react'
import { Typography } from 'antd'

import FilterSelect from './components/FilterSelect'

const { Title } = Typography

function App() {
  const options = {
    sex: ['Any', 'Female', 'Male'],
    age: ['Any', 'Over 30', 'Under 30']
  }

  const [sexFilter, setSexFilter] = useState(undefined)
  const [ageFilter, setAgeFilter] = useState(undefined)

  useEffect(() => {
    console.log(sexFilter, ageFilter)
  }, [sexFilter, ageFilter])

  const getPeople = (sex, age) => {
    console.log(sex, age)
  }

  return (
    <div>
      <Title>People</Title>
      <div>
        <Title level={3}>Sex</Title>
        <FilterSelect options={options.sex} onChange={setSexFilter} />
      </div>
      <div>
        <Title level={3}>Age</Title>
        <FilterSelect options={options.age} onChange={setAgeFilter} />
      </div>
    </div>
  );
}

export default App;
