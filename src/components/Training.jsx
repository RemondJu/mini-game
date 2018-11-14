import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import traininRoom from '../images/Armory.png'

class Training extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Ok, let's practice a bit !</ModalHeader>
          <ModalBody>
            <img className="w-100 mb-2" src={traininRoom} alt="Training room" />
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <Button color="primary" onClick={this.toggle}>Strength training</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Endurance training</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Meditate</Button>{' '}
          </ModalFooter>
          <ModalFooter className="justify-content-center">
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Training;