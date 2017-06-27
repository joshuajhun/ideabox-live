import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateIdea from './CreateIdea'
import  IdeaList  from './IdeaList'
import  Idea  from './Idea'

import {mount, shallow } from 'enzyme'

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find('CreateIdea').length).toEqual(1)
});

it('should have a default state', () => {
  const wrapper = shallow(<App/>)
  const stateOfApp = wrapper.state()

  expect(stateOfApp.ideas).toEqual([])
});

it('should let us add to the state', () => {
  const wrapper = mount(<App/>)
  const titleInput = wrapper.find('.title-input')
  const bodyInput = wrapper.find('.body-input')
  const submit = wrapper.find('.submit-idea')
  const stateOfApp = wrapper.state()

  expect(stateOfApp.ideas).toEqual([])


  titleInput.simulate('change', {target: { value: 'why tho'}})
   bodyInput.simulate('change', {target: { value: 'life is hard'}})

  submit.simulate('click')

  expect(wrapper.state().ideas.length).toEqual(1)
});

it('should render the correct amount of ideas', () => {
  const something = [
    {id:1, title: 'kewl', body: 'beanz'},
    {id:2, title: 'why', body: 'tho'},
    {id:3, title: 'im', body: 'hangry'}
  ]

  const wrapper = shallow(<IdeaList ideas={something}/>)
  console.log(wrapper.debug());
  let {id, title, body} = wrapper.find('Idea').get(1).props;

  expect(wrapper.find('Idea').length).toEqual(3);
  expect(wrapper.find('Idea').get(1).props.id).toEqual(id);
  expect(wrapper.find('Idea').get(1).props.title).toEqual(title);
  expect(wrapper.find('Idea').get(1).props.body).toEqual(body);
})
