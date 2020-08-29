import React from 'react';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Friends from './pages/Friends';
import Login from './pages/Login';
import Saved from './pages/Saved';
import Setting from './pages/Setting';
import Share from './pages/Share';

import Navigation from './components/Navigation';

function App() {
  return (
    <div >
      {/* <BrowserRouter>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/friends" component={Friends} />
                        <Route path="/login" component={Login} />
                        <Route path="/saved" component={Saved} />
                        <Route path="/setting" component={Setting} />
                        <Route path="/share" component={Share} />
                    </Switch>
                    <Navigation />
        </BrowserRouter> */}
        <Login />
    </div>
  );
}

export default App;
