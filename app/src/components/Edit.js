import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import { connect } from 'react-redux';
import { closeEditModal } from '../actions/closeEditModal'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const mapStateToProps = state => ({
    state
})
  
const mapDispatchToProps = dispatch => ({
    closeEditModal: () => dispatch(closeEditModal())
})
  
class Edit extends Component {
    render() {
        return (
            <div className="Edit modal-open">
                <Modal show={this.props.state.editProductReducer.editModalOpen} onHide={this.props.closeEditModal}>
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