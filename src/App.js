import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator.js';
import ClearEquals from './ClearEquals.js';
import Answer from './Answer.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      display: ''
    }
  }
  handleClick = e => {
    console.log(e.target.value, typeof (e.target.value))
    let val = e.target.value;
    this.setState({
      display: this.state.display + val
    })
  }

  handleReset = () => {
    console.log('resetting to 0')
    this.setState({ result: '', display: '' })
  }

  calculateResult = () => {
    console.log(this.state.display)
    try {
      let answer = eval(this.state.display);
      this.setState({ 
        result: (answer || '') + '',
        display: answer
      })
    } catch {
      this.setState({ 
        result: 'error',
        display: 'try again'
      })
    }
  }

  render() {
    return (
      <div className='page-container'>
        <Answer
          display={this.state.display}
        />
        <Calculator
          handleClick={this.handleClick}
        />
        <ClearEquals
          handleReset={this.handleReset}
          calculateResult={this.calculateResult}
        />
      </div>
    )
  }
}

export default App;
