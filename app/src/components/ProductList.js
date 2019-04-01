import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/template.css'

import { connect } from 'react-redux'
import Product from './Product'

import { Query, Subscription } from 'react-apollo'
import { existsSync } from 'fs';
import { ALL_PRODUCTS, PRODUCT_CREATED, PRODUCT_DELETED } from './gql'

const mapStateToProps = state => ({
    state
})

class ProductList extends Component {
    constructor(){
        super()
        this.state = {
            products: {}
        }
        this._subscribeProductUpdated = this._subscribeProductUpdated.bind(this)
        this._subscribeProductDeleted = this._subscribeProductDeleted.bind(this)
    }

    _subscribeProductUpdated = subscribeToMore => {
        subscribeToMore({
          document: PRODUCT_CREATED,
          updateQuery: (prev, { subscriptionData }) => {
            const existingProducts = this.state.products
            const newProduct = subscriptionData.data.productCreated
            if(existingProducts.find(product => product.id == newProduct.id) === undefined){
                this.setState({
                    products: existingProducts.push(newProduct)
                })
            }
            return false
          }
        })
    }

    _subscribeProductDeleted = subscribeToMore => {
        subscribeToMore({
            document: PRODUCT_DELETED,
            updateQuery: (prev, { subscriptionData }) => {
                this.setState({
                    products: prev.products
                })
                return false
            }
        })
    }

    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <Query query={ALL_PRODUCTS}>
                            {({ loading, error, data, subscribeToMore }) => {
                                if (loading) return null
                                if (error) return <div>{error.message}</div>
                                const products = data.products
                                if(Object.keys(this.state.products).length === 0) {
                                    this.setState({
                                        products: products
                                    })
                                }
                                
                                this._subscribeProductUpdated(subscribeToMore)
                                this._subscribeProductDeleted(subscribeToMore)
                                return false
                            }}
                        </Query>
                        
                        {Object.keys(this.state.products).length > 0 &&
                            this.state.products.map(product => <Product key={product.id} name={product.name} desc={product.desc} price={product.price} photo={product.photo} id={product.id} cookies={this.props.cookies}/>)
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps)(ProductList)