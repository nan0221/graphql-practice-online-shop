import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import { connect } from 'react-redux';
import { closeEditModal } from '../actions/closeEditModal'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
// import { ALL_PRODUCTS } from './ProductList'

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

const EDIT_PRODUCT_DETAILS = ({id}) => (
    <Query query={FIND_PRODUCT} variables={{id}}>
        {({ loading, error, data }) => {
            if (loading) return null
            if (error) return <div>{error.message}</div>
            const product = data.product
            return (
                <div>
                    <label for="editProductId" className="m-r-10 m-t-10 display-block">ID</label>
                    <input type="text" name="editProductId" disabled placeholder={product.id} className="w-100pc"/>
                    <br />
                    <label for="editProductName" className="m-r-10 m-t-10 display-block">Product name</label>
                    <input type="text" name="editProductName" value={product.name} className="w-100pc"/>
                    <br />
                    <label for="editProductPhoto" className="m-r-10 m-t-10 display-block">Image path</label>
                    <input type="text" name="editProductPhoto" value={product.photo} className="w-100pc"/>
                    <br />
                    <label for="editProductDesc" className="m-r-10 m-t-10 display-block">Product description</label>
                    <textarea name="editProductDesc" value={product.desc} className="w-100pc" rows="10"></textarea>
                </div>
            )
        }}
    </Query>
)

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
    render() {
        return (
            <div className="Edit">
                {/* Edit Product */}
                <Modal show={this.props.state.editProductReducer.editModalOpen && this.props.state.editProductReducer.mode === 'edit'} onHide={this.props.closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit product details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {EDIT_PRODUCT_DETAILS(this._getQueryVariables())}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeEditModal}>Cancel</Button>
                        <Button variant="primary">Save Changes</Button>
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