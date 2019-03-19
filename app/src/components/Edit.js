import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import { connect } from 'react-redux';
import { closeEditModal } from '../actions/closeEditModal'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

export const FIND_PRODUCT = gql`
    query Product($id: ID!) {
        product(id: $id) {
            id
            name
            price
            desc
            photo
        }
    }
`

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($id: ID!, $input: ProductUpdateInput) {
        updateProduct(id: $id, input: $input) {
            id
            name
            price
            desc
            photo
        }
    }
`

export const CREATE_PRODUCT = gql`
    mutation createProduct($name: String, $price: String, $photo: String, $desc:String) {
        createProduct(name: $name, price: $price, photo: $photo, desc: $desc) {
            name
            price
            desc
            photo
        }
    }
`

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            id
        }
    }
`

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    closeEditModal: () => dispatch(closeEditModal()),
    // refreshProductData: () => dispatch(refreshProductData()),
})

class Edit extends Component {
    // GET CURRENT PRODUCT ID FROM STORE
    _getQueryProductId = () => {
        let id = this.props.state.editProductReducer.productId
        return {id}
    }

    // GET UPDATED PRODUCT DATA FROM INPUTS
    _getUpdatedProductData = () => {
        if(document.getElementsByName('editProductId').length === 0) return 0
        let id = document.getElementsByName('editProductId')[0].value
        let name = document.getElementsByName('editProductName')[0].value
        let price = document.getElementsByName('editProductPrice')[0].value
        let photo = document.getElementsByName('editProductPhoto')[0].value
        let desc = document.getElementsByName('editProductDesc')[0].value
        let input = {
            name: name,
            price: price,
            photo: photo,
            desc: desc
        }

        let args = {
            id: id,
            input: input
        }

        return args
    }

    // PROCESS UPDATE_PRODUCT
    _updateProductData = (e, func) => {
        if(!e) return false
        func({variables: this._getUpdatedProductData()}).then(data => {
            // console.log(data)
            this.props.closeEditModal()
        })
    }

    // PROCESS DELETE_PRODUCT
    _deleteProduct = (e, func) => {
        if(!e) return false
        func({variables: this._getQueryProductId()}).then(data => {
            this.props.closeEditModal()
        })
    }

    // GET NEW PRODUCT DATA FROM INPUTS
    _getNewProductData = () => {
        if(document.getElementsByName('addProductName').length === 0) return 0
        let name = document.getElementsByName('addProductName')[0].value || 'New product'
        let price = document.getElementsByName('addProductPrice')[0].value || ''
        let photo = document.getElementsByName('addProductPhoto')[0].value || ''
        let desc = document.getElementsByName('addProductDesc')[0].value || ''
        let input = {
            name: name,
            price: price,
            photo: "61aA+WXpHiL._SL1000_.jpg",
            desc: desc
        }
        return input
    }

    // PROCESS CREATE_PRODUCT
    _createProductData = (e, func) => {
        if(!e) return false
        func({variables: this._getNewProductData()}).then(data => {
            // console.log(data)
            // TODO: Refresh product list
            this.props.closeEditModal()
        })
    }

    // MODAL: EDIT EXISTING PRODUCT
    _getProductDetails = ({id}) => (
        <Query query={FIND_PRODUCT} variables={{id}}>
            {({ loading, error, data }) => {
                if (loading) return null
                if (error) return <div>{error.message}</div>
                const product = data.product
                return (
                    <div>
                        <Modal.Body>
                            <label htmlFor="editProductId" className="m-r-10 display-block">ID</label>
                            <input type="text" name="editProductId" disabled defaultValue={product.id} className="w-100pc"/>
                            <br />
                            <label htmlFor="editProductName" className="m-r-10 m-t-10 display-block">Product name</label>
                            <input type="text" name="editProductName" defaultValue={product.name} className="w-100pc"/>
                            <br />
                            <label htmlFor="editProductPrice" className="m-r-10 m-t-10 display-block">Price</label>
                            <input type="text" name="editProductPrice" defaultValue={product.price} className="w-100pc"/>
                            <br />
                            <label htmlFor="editProductPhoto" className="m-r-10 m-t-10 display-block">Image path</label>
                            <input type="text" name="editProductPhoto" defaultValue={product.photo} className="w-100pc"/>
                            <br />
                            <label htmlFor="editProductDesc" className="m-r-10 m-t-10 display-block">Product description</label>
                            <textarea name="editProductDesc" defaultValue={product.desc} className="w-100pc" rows="10"></textarea>
                        </Modal.Body>

                        <Modal.Footer>
                            <Mutation mutation={UPDATE_PRODUCT} onCompleted={this.props.closeEditModal}>
                                {(updateProduct) => {
                                    return (
                                        <div>
                                            <Button variant="secondary" onClick={this.props.closeEditModal} className="m-r-10">Cancel</Button>
                                            <Mutation mutation={DELETE_PRODUCT} onCompleted={this.props.closeEditModal}>
                                                {(deleteProduct) => {
                                                    return (
                                                        <Button variant="danger" onClick={(e) => this._deleteProduct(e, deleteProduct)} className="m-r-10">Delete</Button>
                                                    )
                                                }}
                                            </Mutation>
                                            <Button variant="primary" onClick={(e) => this._updateProductData(e, updateProduct)}>Save Changes</Button>
                                            {/* <button onClick={updateProduct(args)}>123</button> */}
                                        </div>
                                    )
                                }}
                            </Mutation>
                        </Modal.Footer>
                    </div>
                )
            }}
        </Query>
    )

    // MDOAL: ADD NEW PRODUCT
    _addProduct = () => (
        <div>
            <Modal.Body>
                <label htmlFor="addProductName" className="m-r-10 display-block">Product name</label>
                <input type="text" name="addProductName" className="w-100pc"/>
                <br />
                <label htmlFor="addProductPrice" className="m-r-10 m-t-10 display-block">Price</label>
                <input type="text" name="addProductPrice" className="w-100pc"/>
                <br />
                <label htmlFor="addProductPhoto" className="m-r-10 m-t-10 display-block">Image path</label>
                <input type="text" name="addProductPhoto" className="w-100pc"/>
                <br />
                <label htmlFor="addProductDesc" className="m-r-10 m-t-10 display-block">Product description</label>
                <textarea name="addProductDesc" className="w-100pc" rows="10"></textarea>
            </Modal.Body>

            <Modal.Footer>
                <Mutation mutation={CREATE_PRODUCT} onCompleted={this.props.closeEditModal}>
                    {(createProduct) => {
                        return (
                            <div>
                                <Button variant="secondary" onClick={this.props.closeEditModal} className="m-r-10">Cancel</Button>
                                <Button variant="primary" onClick={(e) => this._createProductData(e, createProduct)}>Add Product</Button>
                            </div>
                        )
                    }}
                </Mutation>
            </Modal.Footer>
        </div>
    )

    render() {
        return (
            <div className="Edit">
                {/* Edit Product */}
                <Modal show={this.props.state.editProductReducer.editModalOpen && this.props.state.editProductReducer.mode === 'edit'} onHide={this.props.closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit product details</Modal.Title>
                    </Modal.Header>
                    {this.props.state.editProductReducer.editModalOpen && this._getProductDetails(this._getQueryProductId())}
                </Modal>

                {/* Add New Product */}
                <Modal show={this.props.state.editProductReducer.editModalOpen && this.props.state.editProductReducer.mode === 'add'} onHide={this.props.closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new product</Modal.Title>
                    </Modal.Header>
                    {this.props.state.editProductReducer.editModalOpen && this._addProduct()}
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)