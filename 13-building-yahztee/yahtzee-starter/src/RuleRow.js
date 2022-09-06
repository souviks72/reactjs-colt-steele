import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    let isActiveStyle = this.props.score === undefined ? `active`:`disabled`;
    return (
      <tr className={`RuleRow RuleRow-${isActiveStyle}`} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;