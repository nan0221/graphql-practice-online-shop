import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import Product from './Product'
import gql from 'graphql-tag'
import { Query, Subscription } from 'react-apollo'
import { existsSync } from 'fs';
import { connect } from 'react-redux'

export const ALL_PRODUCTS = gql`
    query AllProducts {
        products {
            id
            name
            price
            desc
            photo
        }
    }
`

const PRODUCT_CREATED = gql `
    subscription {
        productCreated {
            id
            name
            price
            desc
            photo
        }
    }
`

const PRODUCT_DELETED = gql `
    subscription {
        productDeleted {
            id
        }
    }
`

const mapStateToProps = state => ({
    state
})

class ProductList extends Component {
    constructor(){
        super()
        this.state = {
            products: {}
        }
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
                            this.state.products.map(product => <Product key={product.id} name={product.name} desc={product.desc} price={product.price} photo={product.photo} id={product.id}/>)
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps)(ProductList)