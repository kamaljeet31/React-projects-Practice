import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, id) => {
        return (
          <div
            type='button'
            className='filter-btn'
            key={id}
            onClick={() => filterItems(category)}
          >
            {category}
          </div>
        )
      })}
    </div>
  )
}

export default Categories
