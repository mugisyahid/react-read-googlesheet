/* eslint-disable */
import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Row>
          <Col lg={12} sm={12}>
            <iframe src="https://docs.google.com/spreadsheets/d/19kdADnmE47dU41zhU9pP1oU-ku027TJzCbwiWMB3KZQ/edit?usp=sharing&amp;headers=false" style={{position: 'relative', width: '80%', height: '500px'}}></iframe>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
