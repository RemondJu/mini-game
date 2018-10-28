import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import PlayerChoice from './components/PlayerChoice'
import Village from './components/Village';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      charName: '',
      charClass: '',
      knightPic: 'https://png.icons8.com/metro/1600/doctor-fate-helmet.png',
      archerPic: 'https://png.icons8.com/ios/1600/archer.png',
      wizardPic: 'https://png.icons8.com/metro/1600/wizard.png',
     }
    this.submitPlayerName = this.submitPlayerName.bind(this);
  }
  submitPlayerName(name, charClass){
    this.setState({
      charName: name,
      charClass: charClass,
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
              knightPic={this.state.knightPic}
              charName={this.state.charName}
              charClass={this.state.charClass}
              />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;