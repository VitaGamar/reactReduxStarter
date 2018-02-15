import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="notification">
          <h1>
            {this.props.count}
          </h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counterReducer
  };
}

export default connect(mapStateToProps)(Counter);
