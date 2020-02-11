import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"
import Body from "./Components/Body"

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
