/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class WeaponsShop extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Looking for the best weapons ? They're all here !</ModalHeader>
          <ModalBody>
            <img className="w-100" src="https://pbs.twimg.com/media/Dhr4C_IUYAI4FcI.jpg" alt="Blacksmith" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Buy/sell weapons</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WeaponsShop;