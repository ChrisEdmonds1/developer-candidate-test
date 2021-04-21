import React, { useState, useEffect } from 'react'
import { Typography, Layout } from 'antd'

import FilterSelect from './components/FilterSelect'
import PeopleTable from './components/PeopleTable'
import { getPeople } from './service'

const { Title } = Typography
const { Content } = Layout

function App() {
  const options = {
    sex: [
      { label: 'Any', value: null },
      { label: 'Female', value: 'female' },
      { label: 'Male', value: 'male' },
    ],
    age: [
      { label: 'Any', value: null },
      { label: 'Over 30', value: '$gte' },
      { label: 'Under 30', value: '$lt' },
    ],
  }

  // If I use undefined the Select components use the id as the value
  const [sexFilter, setSexFilter] = useState(null)
  const [ageFilter, setAgeFilter] = useState(null)

  const [people, setPeople] = useState([])

  useEffect(async () => {
    const response = await getPeople(sexFilter, ageFilter)
    setPeople(response)
  }, [sexFilter, ageFilter])

  return (
    <Layout className="layout">
      <header>
        <Title className="title">People</Title>
        <div>
          <FilterSelect placeholder="Select a sex" options={options.sex} onChange={setSexFilter} />
          <FilterSelect placeholder="Select an age group" options={options.age} onChange={setAgeFilter} />
        </div>
      </header>
      <Content className="content">
        { people && <PeopleTable data={people} /> }
      </Content>
    </Layout>
  );
}

export default App;
