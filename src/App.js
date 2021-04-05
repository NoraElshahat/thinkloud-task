import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddMobile from './components/add-mobile.js';
import MainScreen from '../src/components/main-screen';
import Header from '../src/components/header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={MainScreen}></Route>
        <Route path="/add-mobile" component={AddMobile}></Route>
      </Router>
    </div>
  );
}

export default App;
