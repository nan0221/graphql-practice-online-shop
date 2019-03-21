import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'

import { connect } from 'react-redux'
import { closeShoppingCart } from '../actions/closeShoppingCart'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    closeShoppingCart: () => dispatch(closeShoppingCart()),
})

class ShoppingCart extends Component {
  render() {
    return (
        <Modal show={this.props.state.shoppingCartReducer.shoppingCartOpen} 
            onHide={this.props.closeShoppingCart}>
            <Modal.Header closeButton>
                <Modal.Title>View shopping cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={this.props.closeShoppingCart}>Proceed shopping</Button>
                <Button variant="primary" onClick={this.props.closeShoppingCart}>Checkout</Button>
            </Modal.Footer>
        </Modal>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
