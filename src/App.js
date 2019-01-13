import React, { Component } from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom';
import Header from './app/layout/Header';
import MainPage from './app/layout/MainPage';
import Footer from './app/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='main-container'>
          <MainPage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
