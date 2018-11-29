import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Button,
    CardTitle, CardSubtitle } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { attack } from '../actions';

class Ennemy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    coucou() {
        console.log('coucou')
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
                    <Button onClick={() => this.props.attack(this.props.str)}>Attack</Button>
                    <Button onClick={this.coucou}>Potion</Button>
                    </CardBody>
                </Card>
            </div>
         );
    }
}

function mdtp(dispatch) {
  return bindActionCreators({ attack }, dispatch)
}
 
export default connect(null, mdtp)(Ennemy);
