import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import { connect } from 'react-redux';
import { closeLoginModal } from '../actions/closeLoginModal'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const mapStateToProps = state => ({
    state
})
  
const mapDispatchToProps = dispatch => ({
    closeLoginModal: () => dispatch(closeLoginModal())
})
  
class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Modal show={this.props.state.loginReducer.loginModalOpen} onHide={this.props.closeLoginModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        ...
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeLoginModal}>Cancel</Button>
                        <Button variant="primary">Log in</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)