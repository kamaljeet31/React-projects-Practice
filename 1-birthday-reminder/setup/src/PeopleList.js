import React from 'react'

const PeopleList = ({ peopleList }) => {
  return (
    <>
      {peopleList.map((person) => {
        const { id, image, name, age } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default PeopleList
