import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import PlayerChoice from './components/PlayerChoice'
import Village from './components/Village';
import Dungeon from './components/Dungeon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      charName: 'Unknown',
     }
    this.submitPlayerName = this.submitPlayerName.bind(this);
  }
  submitPlayerName(name){
    this.setState({
      charName: name,
    })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <PlayerChoice
            submitPlayerName={this.submitPlayerName}
            />
          </Route>
          <Route path='/Village'>
            <Village 
            charName={this.state.charName}/>
          </Route>
          <Route path='/Dungeon'>
            <Dungeon 
            charName={this.state.charName}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;