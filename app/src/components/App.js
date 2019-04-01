import React, { Component } from 'react'
import '../styles/App.css'

import { Switch, Route, Router } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Edit from './Edit'
import ShoppingCart from './ShoppingCart'
import Auth from './Auth'
import history from './history'

import { connect } from 'react-redux'
import { editProduct } from '../actions/editProduct'

import { withCookies } from 'react-cookie'

const auth = new Auth();

const handleAuthentication = ({location}, cookies) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication(cookies);
  }
}

const mapStateToProps = state => ({
  state
 })

const mapDispatchToProps = dispatch => ({
  editProduct: (id) => dispatch(editProduct(id))
})

class App extends Component {
  editProduct = (event) => {
    this.props.editProduct();
  }

  render() {
    return (
      <div className="App">
        <pre className="text-left">
          {
            JSON.stringify(this.props, null, 4)
          }
        </pre>
        <Login auth={auth} cookies={this.props.cookies} />
        <Edit />
        <ShoppingCart cookies={this.props.cookies} />
        {/* <Switch>
          <Route exact path="/" component={Home} />
        </Switch> */}
        <Router history={history}>
          <Route path="/" render={(props) => {
            handleAuthentication(props, this.props.cookies);
            return <Home auth={auth} {...props} cookies={this.props.cookies} /> 
          }}/>
        </Router>
      </div>
    );
  }
}

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(App))