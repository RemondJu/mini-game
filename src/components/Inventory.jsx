import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Inventory.css';

class Inventory extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Inventory</ModalHeader>
          <ModalBody className="justify-content-center inventory">
            {Array.from({length: 30}).map((square, index) => <div key={index} className="inventorySpace"></div>)}
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Inventory;