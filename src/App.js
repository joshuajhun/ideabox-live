import React, { Component } from 'react';
import CreateIdea from './CreateIdea'
import { IdeaList } from './IdeaList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  };

  submitIdea(idea) {
    const newState = [...this.state.ideas, Object.assign({}, idea, {id: Date.now()}) ]
    this.setState({ ideas: newState });
  }

  deleteIdea(id) {
    // what array prototype function do we have?
    const newState = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas: newState })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the yung-jungle</h2>
          <CreateIdea pizzaOrPizza={(idea) =>this.submitIdea(idea)}/>
        </div>
        <IdeaList ideas={this.state.ideas} handleDelete={this.deleteIdea.bind(this)}/>
      </div>
    );
  }
}

export default App;
