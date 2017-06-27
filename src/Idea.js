import React from 'react'
import PropTypes, { shape, string, func, number } from 'prop-types'

const Idea = ({id, title, body, handleDelete}) => {
  return (
    <div>
      <h1> {title} </h1>
      <h2> {body} </h2>
      <button onClick={()=> handleDelete(id)}> delete </button>
    </div>
  )
}

Idea.propTypes = {
  id: number,
  title: string,
  body: string,
  handleDelete: func
}

export default Idea
