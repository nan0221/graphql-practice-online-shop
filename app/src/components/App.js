import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Edit from './Edit'
import { connect } from 'react-redux';
import { editProduct } from '../actions/editProduct'

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
        <pre>
          {
            JSON.stringify(this.props, null, 4)
          }
        </pre>
        <Login />
        <Edit />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)