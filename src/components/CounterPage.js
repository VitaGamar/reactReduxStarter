import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';

const CounterPage = () => {
  return (
    <div className="container">
      <Counter /><br/>
      <div className="row">
        <div className="col-1">
          <AddCounter />
        </div>
        <div className="col-1">
          <RemoveCounter />
        </div>
      </div>
    </div>
  );
};
export default CounterPage;
