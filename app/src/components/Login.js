import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/template.css'

import { connect } from 'react-redux'
import { closeLoginModal } from '../actions/closeLoginModal'
import { signupMode } from '../actions/signupMode'
import { loginMode } from '../actions/loginMode'
import { loginCustomer } from '../actions/loginCustomer'
import { setShoppingCart } from '../actions/setShoppingCart'

import { Modal, Button } from 'react-bootstrap'

import { ApolloConsumer, Mutation } from 'react-apollo'
import { LOGIN_CUSTOMER, SIGNUP_CUSTOMER } from './gql'

import { AUTH_TOKEN } from '../index'

import { instanceOf } from 'prop-types';
import { Cookies } from 'react-cookie';

const mapStateToProps = state => ({
    state
})
  
const mapDispatchToProps = dispatch => ({
    closeLoginModal: () => dispatch(closeLoginModal()),
    signupMode: () => dispatch(signupMode()),
    loginMode: () => dispatch(loginMode()),
    loginCustomer: (email, role) => dispatch(loginCustomer(email, role)),
    setShoppingCart: (products) => dispatch(setShoppingCart(products))
})
  
class Login extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    constructor(props){
        super(props)
        this._auth0login = this._auth0login.bind(this)
    }

    lastLoggedInUser = this.props.cookies.get('lastLoggedInUser') || null

    _auth0login() {
        this.props.auth.login();
    }

    _localLogin = async data => {
        const { token } = data.login
        const { cookies } = this.props;
        const now = new Date()
        now.setHours(now.getHours() + 48)
        cookies.set(AUTH_TOKEN, token, { path: '/', expires: now });
        cookies.set('lastLoggedInUser', data.login.customer.email, { path: '/', expires: now });
        cookies.set('isAdmin', data.login.customer.role, { path: '/', expires: now });
    }

    _getLoginDetails = () => {
        if(document.getElementsByName('loginEmail').length === 0) return 0
        let email = document.getElementsByName('loginEmail')[0].value
        let password = document.getElementsByName('loginPassword')[0].value.toString()
        return {
            email: email || '',
            password: password || ''
        }
    }

    _getSignupDetails = () => {
        if(document.getElementsByName('signupEmail').length === 0) return 0
        let email = document.getElementsByName('signupEmail')[0].value
        let password = document.getElementsByName('signupPassword')[0].value
        // let fName = document.getElementsByName('signupFirstName')[0].value
        // let lName = document.getElementsByName('signupLastName')[0].value
        // let address = document.getElementsByName('signupAddress')[0].value
        // let phone = document.getElementsByName('signupPhone')[0].value

        return {
            email: email,
            password: password,
            // firstName: fName,
            // lastName: lName,
            // address: address,
            // phone: phone
        }
    }

    _createCustomerData = (e, func) => {
        if(!e) return false
        func({variables: this._getSignupDetails()}).then(data => {
            // console.log(data.data)
            const customer = data.data.signup.customer
            this.props.loginCustomer(customer.email, customer.role)
        })
    }

    render() {
        const { cookies } = this.props
        return (
            <div className="Login">
                <Modal show={this.props.state.loginReducer.loginModalOpen && this.props.state.loginReducer.mode === 'login'} 
                    onHide={this.props.closeLoginModal}
                    backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="loginEmail" className="m-r-10 display-block">Username</label>
                        <input type="text" name="loginEmail" placeholder={this.lastLoggedInUser} className="w-100pc"/>
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
                        <button type="button" className="btn btn-dark m-r-10" onClick={this._auth0login.bind(this)}>
                            <img src={require('../img/auth0-logo.png')} width="60" height="auto" className="m-r-3" alt="Auth0 "/> Log in
                        </button>
                        <ApolloConsumer>
                            {client => (
                                <Button variant="primary" 
                                    onClick={async () => {
                                        const { data } = await client.mutate({
                                            mutation: LOGIN_CUSTOMER,
                                            variables: this._getLoginDetails()
                                        });

                                        if(data.login.token) {
                                            this._localLogin(data)
                                            const customer = data.login.customer
                                            this.props.loginCustomer(customer.email, customer.role)
                                            this.props.setShoppingCart(customer.products)
                                            const now = new Date()
                                            now.setHours(now.getHours() + 48)
                                            cookies.set('shoppingCart', customer.products, { path: '/', expires: now });
                                        }
                                    }}>
                                    Log in
                                </Button>
                            )}
                        </ApolloConsumer>
                        
                    </Modal.Footer>
                </Modal>

                <Modal show={this.props.state.loginReducer.loginModalOpen && this.props.state.loginReducer.mode === 'signup'} 
                    onHide={this.props.closeLoginModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="signupEmail" className="m-r-10 display-block">Username</label>
                        <input type="text" name="signupEmail" placeholder="name@example.com" className="w-100pc"/>
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
                        {/* <Button variant="secondary" onClick={this.props.closeLoginModal}>Cancel</Button>
                        <Button variant="primary" onClick={this._signup()}>Submit</Button> */}
                        <Mutation mutation={SIGNUP_CUSTOMER} onCompleted={this.props.closeEditModal}>
                            {(createCustomer) => {
                                return (
                                    <div>
                                        <Button variant="secondary" onClick={this.props.closeEditModal} className="m-r-10">Cancel</Button>
                                        <Button variant="primary" onClick={(e) => this._createCustomerData(e, createCustomer)}>Sign up</Button>
                                    </div>
                                )
                            }}
                        </Mutation>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)