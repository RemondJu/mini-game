import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Col, Row, Container, FormGroup, Label, Input, Form, Button, FormFeedback } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './PlayerChoice.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardClick1, cardClick2, cardClick3 } from '../actions';

class PlayerChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCharName: '',
            disabledBtn: true,
            validInput: false,
            invalidInput: false,
         }
        this.nameInputChange = this.nameInputChange.bind(this);
    }

    nameInputChange(e){
        if ((this.state.currentCharName.length >= 4)&&(this.props.charClass !== 'Adventurer')){
            this.setState({
                disabledBtn: false,
                currentCharName: e.target.value,
                validInput: true,
                invalidInput: false,
            })
        } else {
            if (this.props.cardClass1 === 'bg-success'){
                this.setState({
                    disabledBtn: true,
                    currentCharName: e.target.value,
                    validInput: false,
                    invalidInput: true,
                })
            } else if (this.props.cardClass2 === 'bg-success'){
                this.setState({
                    disabledBtn: true,
                    currentCharName: e.target.value,
                    validInput: false,
                    invalidInput: true,
                })
            } else if (this.props.cardClass3 === 'bg-success'){
                this.setState({
                    disabledBtn: true,
                    currentCharName: e.target.value,
                    validInput: false,
                    invalidInput: true,
                })

            } else {
                this.setState({
                    disabledBtn: true,
                    currentCharName: e.target.value,
                    validInput: false,
                    invalidInput: true,
                })
            }
            
        }        
    }

    render() { 
        return (
            <div className="PlayerChoice">
                <Row className="justify-content-center">
                    <h1>The mini-game</h1>
                </Row>
                <Row className="justify-content-center">
                    <h5>by Julien Rémond</h5>
                </Row>
                <Container>
                <h5>Choose a character :</h5>
                    <Row>
                        <Col>
                            <Card className={this.props.cardClass1} onClick={this.props.cardClick1}>
                                <CardImg top width="100%" src="https://png.icons8.com/metro/1600/doctor-fate-helmet.png" alt="Knight avatar" />
                                <CardBody>
                                <CardTitle>Knight</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={this.props.cardClass2} onClick={this.props.cardClick2}>
                                <CardImg top width="100%" src="https://png.icons8.com/ios/1600/archer.png" alt="Archer avatar" />
                                <CardBody>
                                <CardTitle>Archer</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={this.props.cardClass3} onClick={this.props.cardClick3}>
                                <CardImg top width="100%" src="https://png.icons8.com/metro/1600/wizard.png" alt="Wizard avatar" />
                                <CardBody>
                                <CardTitle>Wizard</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Form>
                        <FormGroup>
                            <Label for="name" className="justify-content-center">Enter your character's name :</Label>
                            <Input 
                            invalid={this.state.invalidInput}
                            valid={this.state.validInput}
                            placeholder="John Smith" onChange={this.nameInputChange} value={this.state.currentCharName}/>
                            <FormFeedback valid>You're good to go !</FormFeedback>
                            <FormFeedback invalid>The name is too short, or you didn't pick a class yet...</FormFeedback>
                        </FormGroup>
                        <Row className="justify-content-center">
                            <NavLink to="/Village"><Button onClick={() => this.props.submitPlayerName(this.state.currentCharName)} disabled={this.state.disabledBtn} type="submit">Play !</Button></NavLink>
                        </Row>
                    </Form>                    
                </Container>
            </div>
         );
    }
}
 
function mstp (state){
    return {
        cardClass1: state.cardClass1,
        cardClass2: state.cardClass2,
        cardClass3: state.cardClass3,
        charClass: state.charClass
    }
}
function mdtp(dispatch) {
    return bindActionCreators({ cardClick1, cardClick2, cardClick3 }, dispatch)
}

export default connect(mstp, mdtp)(PlayerChoice);