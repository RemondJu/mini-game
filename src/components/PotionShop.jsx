import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PotionsShop from '../images/Potions-shop.png'

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
            <img className="w-100 mb-2" src={PotionsShop} alt="Potions shop" />
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <Button color="primary" onClick={this.toggle}>Buy potions</Button>{' '}
          </ModalFooter>
          <ModalFooter className="justify-content-center">
            <Button color="secondary" onClick={this.toggle}>Back to village</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PotionShop;