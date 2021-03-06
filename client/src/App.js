import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import ContactState from './context/contact/ContactState.js'
import './App.css';

const App = () => {
  return (
    <ContactState>
      <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/about' component={About}/>
                <Route exact path='/' component={Home}/>
              </Switch>
            </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
