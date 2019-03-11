import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'

class Promotion extends Component {
  render() {
    return (
        <section className="jumbotron text-center">
            <div className="container">
            <h1 className="jumbotron-heading">25% off 100+ brands</h1>
            <p className="lead text-muted">A great range of clothing, sleepwear, shoes, handbags & jewellery.</p>
            <p>
                <a href="#" className="btn btn-primary my-2 m-r-10">SHOP WOMEN</a> 
                <a href="#" className="btn btn-secondary my-2">SHOP MEN</a>
            </p>
            </div>
        </section>
    );
  }
}

export default Promotion;
