import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'

class Product extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <img className="card-img-top" width="100%" height="auto" src={require("../img/products/"+this.props.photo)} alt={this.props.name} />
            {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http:www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>{this.props.name}</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <div className="card-body">
                <div className="card-text">{this.props.name}</div>
                <div className="card-text11">{this.props.desc}</div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">${this.props.price}.00</small>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Product;