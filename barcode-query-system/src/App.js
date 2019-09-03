import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Scan from './pages/Scan.jsx';

// import TestPage from './pages/TestPage.jsx';
import Test from './components/Test.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route exact path="/" component={Scan}/> */}
        {/* <Route exact path="/scan" component = {Scan}/> */}
        <Route exact path="/" component={Test}/>
      </Router>
    )
  }
}
export default App;
