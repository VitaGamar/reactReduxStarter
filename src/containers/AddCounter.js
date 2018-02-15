import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActionCreators from '../actions';
import { bindActionCreators } from 'redux';

export class AddCounter extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" onClick={ e => {
                e.preventDefault();
                this.props.actions.addCounter();
              }}>Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(counterActionCreators, dispatch) };
}

export default connect(null, mapDispatchToProps)(AddCounter);
