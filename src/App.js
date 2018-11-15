import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import PlayerChoice from './containers/PlayerChoice'
import Village from './components/Village';
import Dungeon from './containers/Dungeon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <PlayerChoice/>
          </Route>
          <Route path='/Village'>
            <Village />
          </Route>
          <Route path='/Dungeon'>
            <Dungeon />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;