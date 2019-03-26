import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'

import { connect } from 'react-redux'
import { closeShoppingCart } from '../actions/closeShoppingCart'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { FIND_PRODUCT } from './Edit'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    closeShoppingCart: () => dispatch(closeShoppingCart()),
})

class ShoppingCart extends Component {
    getProduct = (id) => (
        <Query query={FIND_PRODUCT} variables={{id}}>
            {({ loading, error, data }) => {
                if (loading) return null
                if (error) return <div>{error.message}</div>
                const product = data.product
                return (
                    <li>
                        {product.name} - ${product.price}.00
                    </li>
                )
            }}
        </Query>
    )

    render() {
        return (
            <Modal show={this.props.state.shoppingCartReducer.shoppingCartOpen} 
                onHide={this.props.closeShoppingCart}>
                <Modal.Header closeButton>
                    <Modal.Title>View shopping cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.props.state.shoppingCartReducer.products !== '' &&
                        this.props.state.shoppingCartReducer.products.split(',').map(productId => {
                            return <ul>
                                {this.getProduct(productId)}
                            </ul>
                        })
                    }
                    { this.props.state.shoppingCartReducer.products === '' &&
                        <div>Products added to your shopping cart will be displayed here.</div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={this.props.closeShoppingCart}>Proceed shopping</Button>
                    <Button variant="warning" onClick={this.props.closeShoppingCart} className="text-white">Checkout</Button>
                </Modal.Footer>
            </Modal>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
