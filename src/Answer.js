import React, {Component} from 'react';

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

export default Answer;