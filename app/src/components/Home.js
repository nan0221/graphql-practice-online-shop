import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/template.css'
import Header from './Header'
import Footer from './Footer'
import Promotion from './Promotion'
import ProductList from './ProductList'
import Profile from './Profile'

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth

    return (
        <div className="Home">
            <Header auth={this.props.auth} isAuth={isAuthenticated()}/>

            {/* TEST ONLY */}
            {
              isAuthenticated() && (
                <Profile auth={this.props.auth}/>
                )
            }
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