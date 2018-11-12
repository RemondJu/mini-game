import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Col, Row, Container, FormGroup, Label, Input, Form, Button, FormFeedback } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './PlayerChoice.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardClick1, cardClick2, cardClick3, cardUnClick } from '../actions';

class PlayerChoice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            /* cardClass1: 'bg-light',
            cardClass2: 'bg-light',
            cardClass3: 'bg-light', */
            currentClass: '',
            currentCharName: '',
            disabledBtn: true,
            validInput: false,
            invalidInput: false,
         }
        /* this.handleClassChoice = this.handleClassChoice.bind(this); */
       /*  this.handleClassChoiceTest = this.handleClassChoiceTest.bind(this); */
        this.nameInputChange = this.nameInputChange.bind(this);
    }
/* 
    handleClassChoice(e){
        this.setState({
            cardClass1: 'bg-light',
            cardClass2: 'bg-light',
            cardClass3: 'bg-light',
            [e.target.name]: "bg-success",
        })
    } */
    
    nameInputChange(e){
        if ((this.state.currentCharName.length >= 4)&&(this.state.currentClass.length > 1)){
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
                    currentClass: 'Knight'
                })
            } else if (this.props.cardClass2 === 'bg-success'){
                this.setState({
                    disabledBtn: true,
                    currentCharName: e.target.value,
                    validInput: false,
                    invalidInput: true,
                    currentClass: 'Archer'
                })
            } else if (this.props.cardClass3 === 'bg-success'){
                this.setState({
                    disabledBtn: true,
                    currentCharName: e.target.value,
                    validInput: false,
                    invalidInput: true,
                    currentClass: 'Wizard'
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
   /*  handleClassChoiceTest(e){
        console.log(this.props)
        if(this.props[e.target.name] === 'bg-light'){
            return cardClick();
        } else {
            return cardUnClick();
        }
    } */

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
                            <Card className={this.props.cardClass1} name={this.props.cardClass1} onClick={this.props.cardClick1}>
                                <CardImg top width="100%" name={this.props.cardClass1} src="https://png.icons8.com/metro/1600/doctor-fate-helmet.png" alt="Knight avatar" />
                                <CardBody name={this.props.cardClass1}>
                                <CardTitle name={this.props.cardClass1}>Knight</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={this.props.cardClass2} name={this.props.cardClass2} onClick={this.props.cardClick2}>
                                <CardImg top width="100%" name={this.props.cardClass2} src="https://png.icons8.com/ios/1600/archer.png" alt="Archer avatar" />
                                <CardBody name={this.props.cardClass2}>
                                <CardTitle name={this.props.cardClass2}>Archer</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={this.props.cardClass3} name={this.props.cardClass3} onClick={this.props.cardClick3}>
                                <CardImg top width="100%" name={this.props.cardClass1} src="https://png.icons8.com/metro/1600/wizard.png" alt="Wizard avatar" />
                                <CardBody name={this.props.cardClass3}>
                                <CardTitle name={this.props.cardClass3}>Wizard</CardTitle>
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
                            <NavLink to="/Village"><Button onClick={() => this.props.submitPlayerName(this.state.currentCharName, this.state.currentClass)} disabled={this.state.disabledBtn} type="submit">Play !</Button></NavLink>
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
        cardClass3: state.cardClass3
    }
}
function mdtp(dispatch) {
    return bindActionCreators({ cardClick1, cardClick2, cardClick3, cardUnClick }, dispatch)
}

export default connect(mstp, mdtp)(PlayerChoice);