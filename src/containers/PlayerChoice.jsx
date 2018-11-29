import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Col, Row, Container, FormGroup, Label, Input, Form, Button, FormFeedback } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../components/PlayerChoice.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardClick1, cardClick2, cardClick3, getCharName, validInput, invalidInput } from '../actions';

class PlayerChoice extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.nameInputValidation = this.nameInputValidation.bind(this);
    }

    nameInputValidation(e){
        if((this.props.charName.length >= 3) && (this.props.charClass !== 'Adventurer')){
            this.props.getCharName(e);
            this.props.validInput();
        } else {
            this.props.getCharName(e);
            this.props.invalidInput();
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
                            invalid={this.props.inputIsNotValid}
                            valid={this.props.inputIsValid}
                            placeholder="John Smith" onChange={this.nameInputValidation} value={this.props.charName}/>
                            <FormFeedback valid>You're good to go !</FormFeedback>
                            <FormFeedback invalid>This name might be too short, or you didn't pick a class yet...</FormFeedback>
                        </FormGroup>
                        <Row className="justify-content-center">
                            <NavLink to="/Village"><Button disabled={this.props.disabledBtn} type="submit">Play !</Button></NavLink>
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
        charClass: state.charClass,
        charName: state.charName,
        inputIsValid: state.inputIsValid,
        inputIsNotValid: state.inputIsNotValid,
        disabledBtn: state.disabledBtn
    }
}
function mdtp(dispatch) {
    return bindActionCreators({ cardClick1, cardClick2, cardClick3, getCharName, validInput, invalidInput }, dispatch)
}

export default connect(mstp, mdtp)(PlayerChoice);