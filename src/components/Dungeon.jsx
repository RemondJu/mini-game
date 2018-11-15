import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import CharUI from '../containers/CharUI';
import './Dungeon.css'
import Ennemy from './Ennemy';

class Dungeon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ennemies: [
                {
                    name: "goblin",
                    level: 2,
                    strength: 3,
                    health: 25,
                    xp: 25,
                    gold: 20,
                    pic: 'http://3.bp.blogspot.com/-BCIzvFseAds/VlV_2eiOAwI/AAAAAAAAIoA/8NrlYuDsfNE/s1600/PZO1002_008-065_Ch1_Burnt_Offerings-30.jpg'
                },{
                    name: "slime",
                    level: 1,
                    strength: 5,
                    health: 20,
                    xp: 30,
                    gold: 5,
                    pic: 'https://d1u5p3l4wpay3k.cloudfront.net/slaythespire_gamepedia_en/thumb/b/b7/SlimeBoss.png/250px-SlimeBoss.png?version=4d14ae8dacff7f4c8818c08ac949b125'
                },{
                    name: "goblin",
                    level: 2,
                    strength: 3,
                    health: 25,
                    xp: 25,
                    gold: 20,
                    pic: 'http://3.bp.blogspot.com/-BCIzvFseAds/VlV_2eiOAwI/AAAAAAAAIoA/8NrlYuDsfNE/s1600/PZO1002_008-065_Ch1_Burnt_Offerings-30.jpg'
                },{
                    name: "slime",
                    level: 1,
                    strength: 5,
                    health: 20,
                    xp: 30,
                    gold: 5,
                    pic: 'https://d1u5p3l4wpay3k.cloudfront.net/slaythespire_gamepedia_en/thumb/b/b7/SlimeBoss.png/250px-SlimeBoss.png?version=4d14ae8dacff7f4c8818c08ac949b125'
                },{
                    name: "goblin chief",
                    level: 4,
                    strength: 7,
                    health: 35,
                    xp: 50,
                    gold: 100,
                    pic: 'https://i.pinimg.com/originals/d5/d5/93/d5d5931d718af22cd1b2d5d831f8284c.jpg'
                }
            ]
         }
    }
    render() {
        return ( 
            <div className="Dungeon">
            <Row>
                <Col xs="2" className="pt-5 pl-4 text-center charBckgrnd">
                    <CharUI/>
                </Col>
                <Col xs="8" className="DungeonBckgrnd">
                    <Row className="pt-5 pb-5 justify-content-center dungeonTitle">
                     <h1>Dark dungeon : floor 1</h1>
                    </Row>   
                    
                        {this.state.ennemies.map(ennemy => {
                           return <Row className="justify-content-center">
                                    <Ennemy 
                                    name={ennemy.name}
                                    level={ennemy.level}
                                    health={ennemy.health}
                                    pic={ennemy.pic}
                                    />
                                </Row>
                        })}
                    
                </Col>
                <Col className="ml-1 questBckgrnd">
                    <Row className="justify-content-center">
                        <h3>Quests :</h3>
                    </Row>
                </Col>
            </Row>   
            </div>
         );
    }
}

export default Dungeon;