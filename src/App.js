import React from 'react';
import "./App.css"

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import Error from './pages/Error';
import Navbar from './components/Navbar';


import { Route, Switch } from 'react-router-dom';




function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:type" component={Room}/>
        <Route  component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
