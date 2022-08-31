import React, { useState } from 'react'
import data from './data'
import List from './List'
import PeopleList from './PeopleList'

const Birthday = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <article className='container'>
        <h3>{people.length} birthday today</h3>
        <List peopleList={people} />
        <PeopleList peopleList={people} />
        <button onClick={() => setPeople([])}>Delete All</button>
      </article>
    </main>
  )
}

export default Birthday
