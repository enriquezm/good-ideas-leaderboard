import React from 'react';
import ReactDOM from 'react-dom';

class UserEntry extends React.Component {
  render() {
    return(
      <tr key={ this.props.id }>
        <td>{ this.props.name }</td>
        <td>{ this.props.count }</td>
      </tr>
    );
  }
}

export default UserEntry;
