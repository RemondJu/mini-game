import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Button,
    CardTitle, CardSubtitle } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { attack, deadEnnemy, drinkPotion, fullLife } from '../actions';

class Ennemy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.attackCounterAttck = this.attackCounterAttck.bind(this);
        this.shouldDrinkPotion = this.shouldDrinkPotion.bind(this);
    }


    attackCounterAttck(str, charStr, idx) {
      if(this.props.ennemies[this.props.idx].health <= this.props.charStr){
        this.props.deadEnnemy();
        console.log('step 1 :bisou magique')
      } else{
        this.props.attack(str, charStr, idx);
        console.log('bisou magique', str, charStr)
      }
    }
    shouldDrinkPotion(){
      if(this.props.charHealth >= this.props.charMaxHealth - 15){
        this.props.fullLife(this.props.charMaxHealth)
      } else{
        this.props.drinkPotion();
      }
    }

    render() {
        console.log(this.props.charHealth, this.props.charMaxHealth)
        return (

            <div className="mt-5 text-center">
                <Card>
                    <CardBody>
                    <CardTitle>{this.props.ennemies[0].name}</CardTitle>
                    <CardSubtitle>Level {this.props.ennemies[0].level}</CardSubtitle>
                    </CardBody>
                    <CardImg width="100%" src={this.props.ennemies[0].pic} alt="Card image cap" />
                    <CardBody>
                    <CardText>HP : {this.props.ennemies[0].health}</CardText>
                    <Button onClick={() => this.attackCounterAttck(this.props.ennemies[0].strength, this.props.charStr, this.props.idx)}>Attack</Button>
                    <Button onClick={this.shouldDrinkPotion}>Potion</Button>
                    </CardBody>
                </Card>
            </div>
         );
    }
}

function mdtp(dispatch) {
  return bindActionCreators({ attack, deadEnnemy, drinkPotion, fullLife }, dispatch)
}

function mstp (state) {
  return {
    ennemies: state.ennemiesFloor1,
    charStr: state.charStrength,
    charHealth: state.charHealth,
    charMaxHealth: state.charMaxHealth,
  }
}
 
export default connect(mstp, mdtp)(Ennemy);
