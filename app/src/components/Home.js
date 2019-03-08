import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import Header from './Header'
import Footer from './Footer'
import Promotion from './Promotion'
import ProductList from './ProductList'

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Header />
            <main role="main">
                <Promotion />
                <ProductList />>
            </main>
            <Footer />
        </div>
    );
  }
}

export default Home;
