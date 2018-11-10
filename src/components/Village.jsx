import React, { Component } from 'react';
import CharUI from './CharUI';
import { Col, Row, Button } from 'reactstrap';
import Blacksmith from './Blacksmith'
import './Village.css'

class Village extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div className="Village">
            <Row>
                <Col xs="2" className="pt-5 pl-4 text-center charBckgrnd">
                    <CharUI
                    knightPic={this.props.knightPic}
                    charClass={this.props.charClass}
                    charName={this.props.charName}
                    />
                </Col>
                <Col xs="7">
                    <Row className="pt-5 pb-5 justify-content-center villageTitle">
                     <h1>The village</h1>
                    </Row>
                    <Row className="mt-5">
                        <Col xs="6" className="text-center">
                            <Blacksmith buttonLabel='Blacksmith'/>
                        </Col>
                        <Col xs="6" className="text-center">
                            <Button>Training</Button>
                        </Col>
                    </Row>
                    <Row className="mt-5 justify-content-center">
                        <Button>Tavern</Button>
                    </Row>
                    <Row className="mt-5">
                        <Col  className="text-center">
                            <Button>Potions</Button>
                        </Col>
                        <Col className="text-center">
                            <Button>Weapons shop</Button>
                        </Col>
                    </Row>                   
                </Col>
                <Col xs="2">
                    <Row className="justify-content-start">
                        <h3>Quests :</h3>
                    </Row>
                    
                </Col>
            </Row>   
            </div>
         );
    }
}
 
export default Village;