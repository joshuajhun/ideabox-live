import React, {Component} from 'react'

export default class CreateIdea extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(type, e) {
    this.setState({ [type]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      title: '',
      body: '',
    });
    this.props.pizzaOrPizza(this.state);
  };

  render() {
    return (
      <div>
        <input type='text'
               className= 'title-input'
               placeholder='title'
               name= 'jhun'
               value={this.state.title}
               onChange={this.handleChange.bind(this, 'title')} />
        <br/>
        <textarea placeholder='body'
                  className='body-input'
                  value={this.state.body}
                  onChange={(e) => this.handleChange('body', e)} />
        <br/>
        <input type='submit'
               className='submit-idea'
               onClick={this.handleSubmit} />
      </div>
    )
  };
};
