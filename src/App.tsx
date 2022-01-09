import React from 'react';
import './App.css';
import HelloWorld from './component/HelloWorld';

const App = () => (
  <div className="App">
    <header className="App-header">
      <HelloWorld name="Jupiter" />
    </header>
  </div>
);

export default App;
