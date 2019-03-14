import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import Product from './Product'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'


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

class ProductList extends Component {
    render() {
        return (
            
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <Query query={ALL_PRODUCTS}>
                            {({ loading, error, data }) => {
                                if (loading) return null
                                if (error) return <div>Error</div>
                                const products = data.products
                                return products.map(product => <Product key={product.id} name={product.name} desc={product.desc} price={product.price} photo={product.photo} id={product.id}/>)
                            }}
                        </Query>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductList;
