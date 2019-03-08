import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'

class Footer extends Component {
  render() {
    return (
        <footer class="text-muted">
            <div class="container">
            <p class="float-right">
                <a href="#">Back to top</a>
            </p>
            <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="/docs/4.3/getting-started/introduction/">getting started guide</a>.</p>
            </div>

            <div>Icons made by 
            <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a>
                from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> 
                is licensed by 
                <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </div>
        </footer>
    );
  }
}

export default Footer;
