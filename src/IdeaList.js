import React from 'react'
import { Idea } from './Idea'

// there is no state needed.
// stateless componenet
// it gets its information from the parent componenet
// it's literally just a "markup" component


export const IdeaList = ({ ideas, handleDelete }) => {
  const ideasArray = ideas.map(idea => <Idea key={idea.id} {...idea} handleDelete={handleDelete} />);
  return (
    <div>
      {ideasArray}
    </div>
  )
};
