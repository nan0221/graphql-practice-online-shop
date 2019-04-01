import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/template.css'
import Header from './Header'
import Footer from './Footer'
import Promotion from './Promotion'
import ProductList from './ProductList'
import Auth0Login from './Auth0Login'

import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  state: state,
  cookies: ownProps.cookies
 })

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth

    return (
        <div className="Home">
            { isAuthenticated() && (
                <Auth0Login auth={this.props.auth}/>
            )}
            <Header auth={this.props.auth} isAuth={isAuthenticated()} cookies={this.props.cookies}/>
            <main role="main">
                <Promotion />
                <ProductList cookies={this.props.cookies}/>
            </main>
            <Footer />
        </div>
    );
  }
}

export default connect(mapStateToProps, null)(Home)