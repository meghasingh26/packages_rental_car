// import React from 'react';
import React from 'react';
import Pack from './pack/Pack';
import Pack1 from './pack/Pack1';
import Pack2 from './pack/Pack2';
import './style.css';
const App = () => {
  return (
    <div className="App">
      <Pack />
      <Pack1 />
      <Pack2/>
    </div>
  );
};
export default App;