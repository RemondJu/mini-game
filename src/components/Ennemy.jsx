import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Button,
    CardTitle, CardSubtitle } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { attack, deadEnnemy } from '../actions';

class Ennemy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    attackCounterAttck(str, idx) {
      if(this.props.health <= 0){
        this.props.deadEnnemy();
      } else {
        this.props.attack(str, idx);
        setTimeout(
          function()
          {console.log('bisou magique')}, 1000
        )
      }
      
    }

    render() { 
        return ( 
            <div className="mt-5 text-center">
                <Card>
                    <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>Level {this.props.level}</CardSubtitle>
                    </CardBody>
                    <CardImg width="100%" src={this.props.pic} alt="Card image cap" />
                    <CardBody>
                    <CardText>HP : {this.props.health}</CardText>
                    <Button onClick={() => this.attackCounterAttck(this.props.str, this.props.idx)}>Attack</Button>
                    <Button onClick={this.attackCounterAttck}>Potion</Button>
                    </CardBody>
                </Card>
            </div>
         );
    }
}

function mdtp(dispatch) {
  return bindActionCreators({ attack, deadEnnemy }, dispatch)
}

function mstp (state) {
  return {
    health: state.ennemiesFloor1[0].health
  }
}
 
export default connect(mstp, mdtp)(Ennemy);
