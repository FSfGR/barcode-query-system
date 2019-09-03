import React, { Component } from 'react';
// import logo from './logo.svg';
// import './Test.css';
import {Test} from '../components/Test.jsx';
import Webcam from 'react-webcam';

class TestPage extends Component {
  render() {
    return (
      <div className="App">
        <Test/>
        <Webcam />
      </div>
    );
  }
}

export default TestPage;
