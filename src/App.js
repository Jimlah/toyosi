import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './features/main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
