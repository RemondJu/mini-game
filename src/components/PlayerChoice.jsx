import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Col, Row, Container, FormGroup, Label, Input, Form, Button, FormFeedback } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './PlayerChoice.css'

class PlayerChoice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cardClass1: 'bg-light',
            cardClass2: 'bg-light',
            cardClass3: 'bg-light',
            currentClass: '',
            currentCharName: '',
            disabledBtn: true,
            validInput: false,
            invalidInput: false,
         }
        this.handleClassChoice = this.handleClassChoice.bind(this);
        this.nameInputChange = this.nameInputChange.bind(this);
    }

    handleClassChoice(e){
        this.setState({
            cardClass1: 'bg-light',
            cardClass2: 'bg-light',
            cardClass3: 'bg-light',
            [e.target.name]: "bg-success",
        })
    }
    nameInputChange(e){
        if ((this.state.currentCharName.length >= 4)&&(this.state.currentClass.length > 1)){
            this.setState({
                disabledBtn: false,
                currentCharName: e.target.value,
                validInput: true,
                invalidInput: false,
            })
        } else {
            if (this.state.cardClass1 === 'bg-success'){
                this.setState({
                    disabledBtn: true,
                    currentCharName: e.target.value,
                    validInput: false,
                    invalidInput: true,
                    currentClass: 'Knight'
                })
            } else if (this.state.cardClass2 === 'bg-success'){
                this.setState({
                    disabledBtn: true,
                    currentCharName: e.target.value,
                    validInput: false,
                    invalidInput: true,
                    currentClass: 'Archer'
                })
            } else if (this.state.cardClass3 === 'bg-success'){
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


    render() { 
        return ( 
            <div className="PlayerChoice">
                <Row className="justify-content-center">
                    <h1>The mini-game</h1>
                </Row>
                <Row className="justify-content-center">
                    <h3>by Julien Rémond</h3>
                </Row>
                <Container>
                <h5>Choose a character :</h5>
                    <Row>
                        <Col>
                            <Card className={this.state.cardClass1} name="cardClass1" onClick={this.handleClassChoice}>
                                <CardImg top width="100%" name="cardClass1" src="https://png.icons8.com/metro/1600/doctor-fate-helmet.png" alt="Knight avatar" />
                                <CardBody name="cardClass1">
                                <CardTitle name="cardClass1">Knight</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={this.state.cardClass2} name="cardClass2" onClick={this.handleClassChoice}>
                                <CardImg top width="100%" name="cardClass2" src="https://png.icons8.com/ios/1600/archer.png" alt="Archer avatar" />
                                <CardBody name="cardClass2">
                                <CardTitle name="cardClass2">Archer</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={this.state.cardClass3} name="cardClass3" onClick={this.handleClassChoice}>
                                <CardImg top width="100%" name="cardClass3" src="https://png.icons8.com/metro/1600/wizard.png" alt="Wizard avatar" />
                                <CardBody name="cardClass3">
                                <CardTitle name="cardClass3">Wizard</CardTitle>
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
 
export default PlayerChoice;