import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Ennemy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                    <CardLink href="#">Attack</CardLink>
                    <CardLink href="#">Potion</CardLink>
                    </CardBody>
                    <NavLink to="/Village">Flee</NavLink>
                </Card>
            </div>
         );
    }
}
 
export default Ennemy;
