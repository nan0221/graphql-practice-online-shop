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

export const ADD_PRODUCT = gql`
    mutation createProduct($name: String!) {
        createProduct(name: $name) {
            id
            name
            price
            desc
            photo
        }
    }
`

// const GET_PRODUCT_DETAILS = ({id}) => (
//     <Query query={FIND_PRODUCT} variables={{id}}>
//         {({ loading, error, data }) => {
//             if (loading) return null
//             if (error) return <div>{error.message}</div>
//             const product = data.product
//             return (
//                 <div>
//                     <label htmlFor="editProductId" className="m-r-10 m-t-10 display-block">ID</label>
//                     <input type="text" name="editProductId" disabled placeholder={product.id} className="w-100pc"/>
//                     <br />
//                     <label htmlFor="editProductName" className="m-r-10 m-t-10 display-block">Product name</label>
//                     <input type="text" name="editProductName" defaultValue={product.name} className="w-100pc"/>
//                     <br />
//                     <label htmlFor="editProductPrice" className="m-r-10 m-t-10 display-block">Price</label>
//                     <input type="text" name="editProductPrice" defaultValue={product.price} className="w-100pc"/>
//                     <br />
//                     <label htmlFor="editProductPhoto" className="m-r-10 m-t-10 display-block">Image path</label>
//                     <input type="text" name="editProductPhoto" defaultValue={product.photo} className="w-100pc"/>
//                     <br />
//                     <label htmlFor="editProductDesc" className="m-r-10 m-t-10 display-block">Product description</label>
//                     <textarea name="editProductDesc" defaultValue={product.desc} className="w-100pc" rows="10"></textarea>
//                 </div>
//             )
//         }}
//     </Query>
// )



const mapStateToProps = state => ({
    state
})
  
const mapDispatchToProps = dispatch => ({
    closeEditModal: () => dispatch(closeEditModal())
})

class Edit extends Component {
    _getQueryVariables = () => {
        let id = this.props.state.editProductReducer.productId
        return {id}
    }

    GET_PRODUCT_DETAILS = ({id}) => (
        <Query query={FIND_PRODUCT} variables={{id}}>
            {({ loading, error, data }) => {
                if (loading) return null
                if (error) return <div>{error.message}</div>
                const product = data.product
                return (
                    <div>
                        <label htmlFor="editProductId" className="m-r-10 m-t-10 display-block">ID</label>
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
                    </div>
                )
            }}
        </Query>
    )

    UPDATE_PRODUCT_DETAILS = () => {
        console.log("111111")

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

       console.log("2222222")

       return (
            <Mutation mutation={UPDATE_PRODUCT} variables={args}>
                {<div>TODO: change</div> }
            </Mutation>
       )
    }

    render() {
        return (
            <div className="Edit">
                {/* Edit Product */}
                <Modal show={this.props.state.editProductReducer.editModalOpen && this.props.state.editProductReducer.mode === 'edit'} onHide={this.props.closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit product details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.GET_PRODUCT_DETAILS(this._getQueryVariables())}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeEditModal}>Cancel</Button>
                        {/* {this.UPDATE_PRODUCT_DETAILS()} */}
                        <Button variant="primary" onClick={this.UPDATE_PRODUCT_DETAILS}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>

                {/* Add New Product */}
                <Modal show={this.props.state.editProductReducer.editModalOpen && this.props.state.editProductReducer.mode === 'add'} onHide={this.props.closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        ...
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeEditModal}>Cancel</Button>
                        <Button variant="primary">Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)