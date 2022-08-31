import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <article className='container'>
        <h3>questions and answers about login</h3>
        <div className='info'>
          {data.map((question, id) => {
            return <SingleQuestion key={id} {...question} />
          })}
        </div>
      </article>
    </main>
  )
}

export default App
