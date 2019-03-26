import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'nan0221.au.auth0.com',
    clientID: 'RHOCi2bLl2TTLuRAm9hgVXYLwIqcyMtH',
    redirectUri: 'http://localhost:3000/',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}