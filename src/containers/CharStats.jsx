import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CharStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Your character's stats</ModalHeader>
          <ModalBody className="text-center">
            <p>Strength: {this.props.charStrength}</p>
            <p>Agility: {this.props.charAgility}</p>
            <p>Intelligence: {this.props.charIntelligence}</p>
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mstp (state){
  return {
      charStrength: state.charStrength,
      charAgility: state.charAgility,
      charIntelligence: state.charIntelligence,
  }
}

export default connect(mstp)(CharStats);