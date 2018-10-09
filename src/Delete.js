import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Delete extends Component {
  static propTypes = {
    buttonDisabled: PropTypes.func.isRequired,
    onDeleteLastItem: PropTypes.func.isRequired,
  }

  handleDeleteLastItem = (event) => {
    this.props.onDeleteLastItem();
  };
  
  render () {
    
    return (
      <button onClick={this.handleDeleteLastItem} disabled={this.props.buttonDisabled}>
        Delete Last Item
      </button>
    );
    
  }
  
}

export default Delete;