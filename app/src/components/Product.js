import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'

import ReactHtmlParser from 'react-html-parser';

import { connect } from 'react-redux';
import { editProduct } from '../actions/editProduct'
import { login } from '../actions/login'
import { setShoppingCart } from '../actions/setShoppingCart'
import { openShoppingCart } from '../actions/openShoppingCart'

import { Mutation } from 'react-apollo'
import { ADD_PRODUCT_BY_CUSTOMER } from './gql'

const mapStateToProps = state => ({
  state
 })

const mapDispatchToProps = dispatch => ({
  editProduct: (id) => dispatch(editProduct(id)),
  login: () => dispatch(login()),
  setShoppingCart: (products) => dispatch(setShoppingCart(products)),
  openShoppingCart: () => dispatch(openShoppingCart())
})

class Product extends Component {
  editProduct = (event) => {
    this.props.editProduct(this.props.id)
  }

  _addToCart = (e, func) => {
    if(!e) return false
    const customerId = this._getCustomerId()
    if(customerId === '') {
      this.props.login()
    } else {
      // update store
      let products = this._getShoppingCart()
      if(products !== '') {
        products = products + ',' + this.props.id
      } else {
        products = this.props.id
      }

      // update db
      func({variables: {
        email: customerId,
        data: {
          products: products
        }
      }}).then(data => {
        // TODO: use subscription method instead
        this.props.setShoppingCart(data.data.updateCustomer.products)
        this.props.openShoppingCart()
    })
    }
  }

  _getCustomerId = () => {
    return this.props.state.loginReducer.loggedInUser
  }

  _getShoppingCart = () => {
    return this.props.state.shoppingCartReducer.products || ''
  }

  render() {
    return (
        <div className="col-md-4">
        { this.props.photo &&
          <div className="card mb-4 shadow-sm">
              <img className="card-img-top" width="100%" height="auto" src={require("../img/products/"+this.props.photo)} alt={this.props.name} />
              {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http:www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>{this.props.name}</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                  <div className="card-body">
                  <div className="card-text font-weight-600 m-b-10 p-b-10 b-b-1">{this.props.name}</div>
                  <div className="card-text11">{ ReactHtmlParser(this.props.desc) }</div>
                  <div className="d-flex justify-content-between align-items-center m-t-10">
                      <div className="btn-group">
                        <Mutation mutation={ADD_PRODUCT_BY_CUSTOMER}>
                          {(updateCustomer) => {
                            return (
                              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={(e) => this._addToCart(e, updateCustomer)}>Add to cart</button>
                            )
                          }}

                        </Mutation>
                        {(this.props.state.loginReducer.loggedInUser !== '' && this.props.state.loginReducer.isAdmin ) && 
                          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => this.props.editProduct(this.props.id)}>Edit</button>
                        }
                      </div>
                      <small className="text-muted">${this.props.price}.00</small>
                    </div>
                </div>
            </div>
          }
        </div>
      
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);