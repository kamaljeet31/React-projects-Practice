import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <div
            type='button'
            className='filter-btn'
            key={index}
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
