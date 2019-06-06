import React, {Component} from 'react';

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

export default ClearEquals;