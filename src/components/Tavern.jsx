/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            <img className="w-100" src="https://cdn.artstation.com/p/assets/images/images/001/088/177/large/concept-4-tavern.jpg?1439804839" alt="Blacksmith" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Have a drink</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Talk about work</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Tavern;