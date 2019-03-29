import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/template.css'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { login } from '../actions/login'
import { logout } from '../actions/logout'
import { loginCustomer } from '../actions/loginCustomer'
import { openShoppingCart } from '../actions/openShoppingCart'
import { setShoppingCart } from '../actions/setShoppingCart'
import { addProduct } from '../actions/addProduct'

import { AUTH_TOKEN } from '../index';

import { instanceOf } from 'prop-types';
import { Cookies } from 'react-cookie';

const mapStateToProps = (state, ownProps) => ({
  state: state,
  cookies: ownProps.cookies,
 })

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
  loginCustomer: (email, role) => dispatch(loginCustomer(email, role)),
  openShoppingCart: () => dispatch(openShoppingCart()),
  setShoppingCart: (products) => dispatch(setShoppingCart(products)),
  addProduct: () => dispatch(addProduct()),
})

class Header extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props){
    super(props)
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    const { isAuthenticated } = this.props.auth
    const { cookies } = this.props;
    // local
    if(!isAuthenticated()) {
      cookies.remove(AUTH_TOKEN)
      cookies.remove('lastLoggedInUser')
    } else {
      // auth0
      // clear data in cookies
      this.props.auth.logout(cookies);
      // log out of auth0
      const logoutLink = "https://nan0221.au.auth0.com/v2/logout"
      var win = window.open(logoutLink, '_blank')
      setTimeout(function() { win.close();}, 400);
    }

    // update store
    this.props.logout()
    this.props.setShoppingCart('')
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;
    const { cookies } = this.props;

    if (cookies.get('isLoggedIn') === 'true') {
      renewSession();
    }

    const loggedInUser = cookies.get('lastLoggedInUser') || ''
    if(loggedInUser !== '') {
      this.props.loginCustomer(loggedInUser)
      this.props.setShoppingCart('requiresLogin')
    }
  }

  render() {
    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" stroke="none" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                        <strong>Online shop</strong>
                    </a>

                    <span className="d-flex">
                      {(this.props.state.loginReducer.loggedInUser !== '' && this.props.state.loginReducer.loggedInUser !== undefined) &&
                        <span>
                          <span className="text-white m-r-10">Welcome, {this.props.state.loginReducer.loggedInUser}</span>
                          {this.props.state.loginReducer.isAdmin && 
                            <button type="button" className="btn btn-outline-light m-r-10" onClick={this.props.addProduct}>Add product</button>
                          }
                          <button type="button" className="btn btn-outline-warning m-r-10" onClick={this.props.openShoppingCart}>Shopping cart</button>
                          <button type="button" className="btn btn-outline-light" onClick={this.logout.bind(this)}>Log out</button>
                        </span>
                      }

                      {(this.props.state.loginReducer.loggedInUser === '' || this.props.state.loginReducer.loggedInUser === undefined) &&
                        <button type="button" className="btn btn-outline-light" onClick={this.props.login}>Login</button>
                      }
                    </span>
                </div>
                
            </div>
        </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
