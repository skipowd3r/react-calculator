import React, { Component } from 'react';
import './App.css';

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

class Calculator extends Component {
  createNumbers = num => {
    const { handleClick } = this.props;
    return (
      <button onClick={handleClick} key={num} value={num} id={'number-'+num} className='calc-buttons'>{num}</button>
    )
  }
  render() {
    const numbers = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '(', 0, ')', '/'];
    const createCalculator = numbers.map(this.createNumbers)
    return (
      <div className='calculator-grid'>{createCalculator}</div>
    )
  }
}
class ClearEquals extends Component {
  render() {
    const { handleReset, calculateResult } = this.props;
    return (
      <div>
        <button className='reset' onClick={handleReset} key={'reset'} value={'reset'}>Reset</button>
        <button className='equals' onClick={calculateResult} key={'='} value={'='}>=</button>
      </div>
    )
  }
}
class Answer extends Component {
  render() {
    const { display } = this.props;
    return (
      <div className="answer">
        <h2 className="display">{display}</h2>
      </div>
    )
  }
}

export default App;
