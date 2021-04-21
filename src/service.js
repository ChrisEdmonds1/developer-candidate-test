/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import _get from 'lodash'

export const getPeople = async (sexFilter, ageFilter) => {
  try {
    const response = await axios.get('http://localhost:3000/people', {
      params: { sex: sexFilter, age: ageFilter },
    })

    return response.data
  } catch (error) {
    const errorMessage = _get(error, 'response.data')
    return errorMessage
  }
}
