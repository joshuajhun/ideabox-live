import React from 'react'

export const Idea = ({id, title, body, handleDelete}) => {
  return (
    <div>
      <h1> {title} </h1>
      <h2> {body} </h2>
      <button onClick={()=> handleDelete(id)}> delete </button>
    </div>
  )
}
