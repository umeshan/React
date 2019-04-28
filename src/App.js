import React, { Component } from 'react';
import {Home} from './component/Home';
import {Notes} from './component/Notes';
import {Conversion} from './component/Conversions';
import {Users} from './component/Users';
import {Header, Footer} from './component/Navigation';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>Hello React!!</p>
      //   </header>
      // </div>

      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/notes" component={Notes}></Route>
          <Route path='/conversion' component={Conversion}></Route>
          <Route path='/users' component={Users}></Route>
        </div>
        <Footer/>
      </Router>


      // <div>
      //   <Home title='My Home'/>
      // </div>

    );
  }
}

export default App;
