import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import Line from './components/Line/Line';
import Tabs from './components/Tabs/Tabs';
import Diet from './components/Diet/Diet';

function App() {
  return (
    <div className="App">
      <Header/>
      <Line/>
      <Tabs/>
      <Diet/>
      </div>
  );
}

export default App;
