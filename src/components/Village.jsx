import React, { Component } from 'react';
import CharUI from './CharUI';
import { Col, Row, Container } from 'reactstrap';

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
                <Col className="ml-5 mt-5">
                    <CharUI 
                    charClass={this.props.charClass}
                    charName={this.props.charName}
                    />
                </Col>
                <Col>
                    <h1>The village</h1>
                </Col>
                <Col>
                    <h3>Quests :</h3>
                </Col>
            </Row>   
            </div>
         );
    }
}
 
export default Village;