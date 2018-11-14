import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Blacksmith extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Welcome adventurer ! You'd like to repair some stuff ?</ModalHeader>
          <ModalBody>
            <img className="w-100 mb-2" src="https://orig00.deviantart.net/9a79/f/2014/143/e/1/kyklopes_blacksmith_by_nathanrosario-d7jh3i3.jpg" alt="Blacksmith" />
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <Button color="primary" onClick={this.toggle}>Repair</Button>{' '}
          </ModalFooter>
          <ModalFooter className="justify-content-center">
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Blacksmith;