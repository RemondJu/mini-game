import React, { Component } from 'react';
import CharUI from './CharUI';
import { Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Blacksmith from './Blacksmith'
import './Village.css'
import Tavern from './Tavern';
import PotionShop from './PotionShop';
import WeaponsShop from './WeaponsShop';
import Training from './Training';


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
                <Col xs="8" className="villageBckgrnd">
                    <Row className="pt-5 pb-5 justify-content-center villageTitle">
                     <h1>The village</h1>
                    </Row>
                    <Row className="villageRow">
                        <Col xs="6" className="text-center">
                            <Blacksmith buttonLabel='Blacksmith'/>
                        </Col>
                        <Col xs="6" className="text-center">
                            <Training buttonLabel="Training"/>
                        </Col>
                    </Row>
                    <Row className="mt-5 justify-content-center">
                        <Tavern buttonLabel="Tavern" />
                    </Row>
                    <Row className="mt-5 pb-5">
                        <Col  className="text-center">
                            <PotionShop buttonLabel="Potions Shop"/>
                        </Col>
                        <Col className="text-center">
                            <WeaponsShop buttonLabel="Weapons Shop"/>
                        </Col>
                    </Row>  
                    <Row className="text-center mt-5">
                        <Col>
                            <NavLink to='/Dungeon'>
                                <img className="rounded-circle" src="https://i.pinimg.com/236x/d8/6a/a6/d86aa615af381502bd7176005ebdbaff.jpg" alt="dungeon Entrance"/>
                            </NavLink>
                            <h5>Get into the dark dungeon</h5>
                        </Col>
                    </Row>                 
                </Col>
                <Col className="ml-1 mt-5 questBckgrnd">
                        <h3>Quests :</h3>
                        <ul>
                            <li>Kill the goblin chief. <br/>Reward : 150 gold <br/>XP : 150</li>
                            <li>Get to level 2. <br/>Reward : Iron sword</li>
                        </ul>                                      
                </Col>
            </Row>   
            </div>
         );
    }
}
 
export default Village;