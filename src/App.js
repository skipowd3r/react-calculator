import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator.js';
import ClearEquals from './ClearEquals.js';
import Answer from './Answer.js';

var Parser = require('expr-eval').Parser;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      display: ''
    }
  }
  handleClick = e => {
    let val = e.target.value;
    this.setState({
      display: this.state.display + val
    })
  }
  handleReset = () => {
    this.setState({ result: '', display: '' })
  }
  calculateResult = () => {
    try {
      //let answer = eval(this.state.display);
      let answer = Parser.evaluate(this.state.display);
      console.log(answer)
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
