import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/template.css'
import Header from './Header'
import Footer from './Footer'
import Promotion from './Promotion'
import ProductList from './ProductList'
import Auth0Login from './Auth0Login'

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth

    return (
        <div className="Home">
            { isAuthenticated() && (
                <Auth0Login auth={this.props.auth}/>
            )}
            <Header auth={this.props.auth} isAuth={isAuthenticated()}/>
            <main role="main">
                <Promotion />
                <ProductList />
            </main>
            <Footer />
        </div>
    );
  }
}

export default Home