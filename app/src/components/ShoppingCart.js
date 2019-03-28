import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/template.css'

import { connect } from 'react-redux'
import { closeShoppingCart } from '../actions/closeShoppingCart'

import { Modal, Button, Row, Col } from 'react-bootstrap'

import { ApolloConsumer, Query } from 'react-apollo'
import { FIND_PRODUCT } from './gql'


const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    closeShoppingCart: () => dispatch(closeShoppingCart()),
})

class ShoppingCart extends Component {
    getProduct = (id, quantity, client) => (
        <Query query={FIND_PRODUCT} variables={{id}} key={id}>
            {({ loading, error, data }) => {
                if (loading) return null
                if (error) return <div>{error.message}</div>
                const product = data.product
                return (
                    <li>
                        <Row>
                            <Col><img className="img-fluid" src={require("../img/products/"+product.photo)} width="40" height="auto" alt={product.name} /></Col>
                            <Col xl="8" lg="8" md="6" sm="5" xs="5">{product.name}</Col>
                            <Col>${product.price}.00</Col>
                            <Col>{quantity}</Col>
                        </Row>
                    </li>
                )
            }}
        </Query>
    )

    getProducts = () => {
        let allProductId = this.props.state.shoppingCartReducer.products.split(',')
        let uniqProducts = []
        allProductId.forEach(productId => {
            if(uniqProducts.find(product => product.id === productId) !== undefined){
                let existingQuantity = uniqProducts.find(product => product.id === productId).quantity
                uniqProducts.pop(uniqProducts.find(product => product.id === productId))
                uniqProducts.push({
                    id: productId,
                    quantity: existingQuantity + 1
                })
            } else {
                uniqProducts.push({
                    id: productId,
                    quantity: 1
                })
            }
        })
        return uniqProducts
    }

    render() {
        return (
            <Modal show={this.props.state.shoppingCartReducer.shoppingCartOpen} 
                onHide={this.props.closeShoppingCart}
                size='lg'
                backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>View shopping cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { (this.props.state.shoppingCartReducer.products !== '' && this.props.state.shoppingCartReducer.products !== null) &&
                        <ApolloConsumer>
                            {client => (
                                <ul>
                                    <li>
                                        <Row>
                                            <Col>Product</Col>
                                            <Col xl="8" lg="8" md="6" sm="5" xs="5"></Col>
                                            <Col>Price</Col>
                                            <Col>Quantity</Col>
                                        </Row>
                                    </li>
                                    { this.getProducts().map(product => this.getProduct(product.id, product.quantity, client)) }
                                </ul>
                            )}
                        </ApolloConsumer>
                    }
                    { (this.props.state.shoppingCartReducer.products === '' || this.props.state.shoppingCartReducer.products === null) &&
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
