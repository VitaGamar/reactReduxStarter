import React from 'react';
import Header from './Header';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes />
    </div>
  );
};
export default App;
