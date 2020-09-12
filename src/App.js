import React from 'react';
import Routes from './routes';

import setArrow from './styles/images/right.svg';

function App() {
  return (
    <div id="menu">
      <img src={setArrow} alt="right" />
        <Routes />
      <img src={setArrow} alt="right"/>
    </div>
    
  );
}

export default App;
