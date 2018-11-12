/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PotionShop extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Are you lost wanderer ?</ModalHeader>
          <ModalBody>
            <img className="w-100" src="http://fc07.deviantart.net/fs71/f/2010/329/1/4/voodoo_shop_by_candra-d33l0lv.jpg" alt="Blacksmith" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Buy potions</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PotionShop;