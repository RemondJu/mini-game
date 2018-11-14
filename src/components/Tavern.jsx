import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import tavern from '../images/tavern.jpg'

class Tavern extends React.Component {
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
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Hello there ! What would you like to drink ?</ModalHeader>
          <ModalBody>
            <img className="w-100 mb-2" src={tavern} alt="Tavern" />
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <Button color="primary" onClick={this.toggle}>Have a drink</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Talk with tender</Button>{' '}
          </ModalFooter>
          <ModalFooter className="justify-content-center">
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Tavern;