import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Artist from './components/Artist/Artist';
import Employer from './components/Employer/Employer';
import Fan from './components/Fan/Fan';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/*<Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/fan" Component={Fan} />
        <Route path="/employer" Component={Employer} />
        <Route path="/artist" Component={Artist} />*/}
       
        <Route exact={true} path="/" Component={Home} />
       
      </div>
    );
  }
}

export default App;
