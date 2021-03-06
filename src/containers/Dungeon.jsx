import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CharUI from "./CharUI";
import "./Dungeon.css";
import Ennemy from "./Ennemy";
import { connect } from "react-redux";
import Quests from "./Quests";
import Player from "./Player";

class Dungeon extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="Dungeon">
        <Row>
          <Col xs="2" className="pt-5 pl-4 text-center charBckgrnd">
            <CharUI />
          </Col>
          <Col xs="8" className="DungeonBckgrnd">
            <Row className="pt-5 pb-5 justify-content-center dungeonTitle">
              <h1>Dark dungeon : floor 1</h1>
            </Row>
            <Row>
              <Col>
                <Player />
              </Col>
              <Col>
                {this.props.ennemiesFloor1
                  .slice(this.props.minIndex, this.props.maxIndex)
                  .map((ennemy, index) => {
                    return (
                      <div key={ennemy.id} className="justify-content-center">
                        <Ennemy
                          idx={index}
                          name={ennemy.name}
                          level={ennemy.level}
                          pic={ennemy.pic}
                          str={ennemy.strength}
                        />
                      </div>
                    );
                  })}
              </Col>
            </Row>
          </Col>
          <Col className="ml-1 mt-5 questBckgrnd">
            <Quests />
          </Col>
        </Row>
      </div>
    );
  }
}

function mstp(state) {
  return {
    ennemiesFloor1: state.ennemiesFloor1,
    minIndex: state.minIndex,
    maxIndex: state.maxIndex
  };
}

export default connect(mstp)(Dungeon);
