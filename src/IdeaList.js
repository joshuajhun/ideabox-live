import React from 'react'
import Idea  from './Idea'
import PropTypes, { shape, string, func, number, arrayOf } from 'prop-types'

const IdeaList = ({ ideas, handleDelete }) => {
  const ideasArray = ideas.map(idea => <Idea key={idea.id} {...idea} handleDelete={handleDelete} />);
  return (
    <div>
      {ideasArray}
    </div>
  )
};

const idea = shape({
  title: string,
  body: string,
  id: number
})

IdeaList.propTypes = {
  ideas: arrayOf(idea)
}

export default IdeaList
