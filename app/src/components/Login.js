import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import { connect } from 'react-redux';
import { closeLoginModal } from '../actions/closeLoginModal'
import { signupMode } from '../actions/signupMode'
import { loginMode } from '../actions/loginMode'
import { loginCustomer } from '../actions/loginCustomer'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

export const CREATE_CUSTOMER = gql`
    mutation createCustomer($email: String, $password: String, $firstName: String, $lastName: String, $address: String, $phone: String) {
        createCustomer(email: $email, password: $password, firstName: $firstName, lastName: $lastName, address: $address, phone: $phone) {
            email
        }
    }
`
export const LOGIN_CUSTOMER = gql`
    query customer($email: String) {
        customer(email: $email) {
            email
            password
        }
    }
`

const mapStateToProps = state => ({
    state
})
  
const mapDispatchToProps = dispatch => ({
    closeLoginModal: () => dispatch(closeLoginModal()),
    signupMode: () => dispatch(signupMode()),
    loginMode: () => dispatch(loginMode()),
    loginCustomer: (email) => dispatch(loginCustomer(email))
})
  
class Login extends Component {
    _getLoginDetails = () => {
        if(document.getElementsByName('loginEmail').length === 0) return 0
        let email = document.getElementsByName('loginEmail')[0].value
        let password = document.getElementsByName('loginPassword')[0].value.toString()
        return {
            email: email,
            // password: password
        }
    }

    _login = (e) => {
        if(!e) return false
        return <Query query={LOGIN_CUSTOMER} variables={this._getLoginDetails()}>
            {({ loading, error, data, variables }) => {
                console.log(variables)
                console.log(loading)
                console.log(error)
                console.log(data)
                if (loading) return <div>{loading}</div>
                if (error) return <div>{error.message}</div>
                console.log(data)
                // if(!data) return false
                // this.props.loginCustomer(data.email)
                return (<div>123</div>)
            }}
        </Query>
    }

    _getSignupDetails = () => {
        if(document.getElementsByName('signupEmail').length === 0) return 0
        let email = document.getElementsByName('signupEmail')[0].value
        let password = document.getElementsByName('signupPassword')[0].value
        let fName = document.getElementsByName('signupFirstName')[0].value
        let lName = document.getElementsByName('signupLastName')[0].value
        let address = document.getElementsByName('signupAddress')[0].value
        let phone = document.getElementsByName('signupPhone')[0].value

        return {
            email: email,
            password: password,
            firstName: fName,
            lastName: lName,
            address: address,
            phone: phone
        }
    }

    _signup = () => {}

    render() {
        return (
            <div className="Login">
                <Modal show={this.props.state.loginReducer.loginModalOpen && this.props.state.loginReducer.mode === 'login'} 
                    onHide={this.props.closeLoginModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="loginEmail" className="m-r-10 display-block">Username</label>
                        <input type="text" name="loginEmail" placeholder="name@example.com" className="w-100pc"/>
                        <br />
                        <label htmlFor="loginPassword" className="m-r-10 m-t-10 display-block">Password</label>
                        <input type="password" name="loginPassword" className="w-100pc"/>
                        <br />
                        <div className="m-t-10">
                            Do not have an account? <Button variant="info" onClick={this.props.signupMode}>Sign up</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeLoginModal}>Cancel</Button>
                        <Button variant="primary" onClick={(e) => this._login(e)}>Log in</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.props.state.loginReducer.loginModalOpen && this.props.state.loginReducer.mode === 'signup'} 
                    onHide={this.props.closeLoginModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="singupEmail" className="m-r-10 display-block">Username</label>
                        <input type="text" name="singupEmail" placeholder="name@example.com" className="w-100pc"/>
                        <br />
                        <label htmlFor="signupPassword" className="m-r-10 m-t-10 display-block">Password</label>
                        <input type="password" name="signupPassword" className="w-100pc"/>
                        <br />
                        <label htmlFor="signupFirstName" className="m-r-10 m-t-10 display-block">First name</label>
                        <input type="text" name="signupFirstName" className="w-100pc"/>
                        <br />
                        <label htmlFor="signupLastName" className="m-r-10 m-t-10 display-block">Last name</label>
                        <input type="text" name="signupLastName" className="w-100pc"/>
                        <br />
                        <label htmlFor="signupAddress" className="m-r-10 m-t-10 display-block">Address</label>
                        <input type="text" name="signupAddress" className="w-100pc"/>
                        <br />
                        <label htmlFor="signupPhone" className="m-r-10 m-t-10 display-block">Phone number</label>
                        <input type="text" name="signupPhone" className="w-100pc"/>
                        <br />
                        <div className="m-t-10">
                            Already have an account? <Button variant="info" onClick={this.props.loginMode}>Log in</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeLoginModal}>Cancel</Button>
                        <Button variant="primary" onClick={this._signup}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)