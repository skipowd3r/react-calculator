import React, {Component} from 'react';

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

export default Calculator;