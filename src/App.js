import React, { useState, useEffect } from 'react'
import { Typography } from 'antd'

import FilterSelect from './components/FilterSelect'
import { getPeople } from './service'

const { Title } = Typography

function App() {
  const options = {
    sex: [
      { label: 'Any', value: null },
      { label: 'Female', value: 'female'},
      { label: 'Male', value: 'male'},
    ],
    age: [
      { label: 'Any', value: null },
      { label: 'Over 30', value: '$gte'},
      { label: 'Under 30', value: '$lt'},
    ]
  }

  // If I use undefined the Select components use the id as the value
  const [sexFilter, setSexFilter] = useState(null)
  const [ageFilter, setAgeFilter] = useState(null)

  const [people , setPeople] = useState([])

  useEffect(async () => {
    console.log(sexFilter, ageFilter)
    const response = await getPeople(sexFilter, ageFilter)
    setPeople(response)
  }, [sexFilter, ageFilter])

  return (
    <div className="container">
      <main className="main">
        <Title>People</Title>
        <div>
          <Title level={3}>Sex</Title>
          <FilterSelect placeholder="Select a sex" options={options.sex} onChange={setSexFilter} />
        </div>
        <div>
          <Title level={3}>Age</Title>
          <FilterSelect placeholder="Select an age group" options={options.age} onChange={setAgeFilter} />
        </div>
        { people && <p>{JSON.stringify(people)}</p> }
      </main>
    </div>
  );
}

export default App;
