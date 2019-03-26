import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'

class Footer extends Component {
  render() {
    return (
        <footer className="text-muted">
            <div className="container">
            <p className="float-right">
                <a href="#">Back to top</a>
            </p>
            <p>The website is customised based on the &copy; Bootstrap Album example.</p>
            </div>

            <div>Icons made by 
            <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan"> Darius Dan </a>
                from 
                <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a> 
                is licensed by 
                <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
            </div>
        </footer>
    );
  }
}

export default Footer;
