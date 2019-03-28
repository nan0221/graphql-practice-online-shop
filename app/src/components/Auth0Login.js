import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginCustomer } from '../actions/loginCustomer'
import { setShoppingCart } from '../actions/setShoppingCart'

import { Query, Mutation } from 'react-apollo'
import { LOGIN_CUSTOMER, SIGNUP_CUSTOMER } from './gql'

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    loginCustomer: (email, role) => dispatch(loginCustomer(email, role)),
    setShoppingCart: (products) => dispatch(setShoppingCart(products))
})

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    _getLoggedInCustomer = () => {
        return {email: this.props.state.loginReducer.loggedInUser}
    }

    componentWillMount() {
        const { isAuthenticated } = this.props.auth
        if(!isAuthenticated()) return false
        if(this.props.state.loginReducer.loggedInUser !== '') return false
        const { userProfile, getProfile } = this.props.auth
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile })
            })
        } else {
            this.setState({ profile: userProfile })
        }
    }

    render() {
        const { isAuthenticated } = this.props.auth
        const { profile } = this.state
        return (
            <div className="container">
                { (isAuthenticated() && profile !== undefined) &&
                    <Query query={LOGIN_CUSTOMER} variables={{email: profile.name}}>
                        {({ loading, error, data }) => {
                            if (loading) return null
                            if (error) return <div>{error.message}</div>
                            if (data.customer === null && this._getLoggedInCustomer().email === "") {
                                // if the customer logs in for the first time
                                return (
                                    <Mutation mutation={SIGNUP_CUSTOMER}>
                                        {(createCustomer, error) => {
                                            createCustomer({variables: {email: profile.name}}).then(data => {
                                                if(data.data.createCustomer !== undefined) {
                                                    this.props.loginCustomer(profile.name,'CUSTOMER')
                                                }
                                                return true

                                            })
                                            return false
                                        }}
                                    </Mutation>
                                )
                            } else if (this._getLoggedInCustomer().email === ""){
                                // if the customer is already in database
                                this.props.loginCustomer(profile.name,'CUSTOMER')
                                this.props.setShoppingCart(data.customer.products)
                            }
                            return true
                        }}
                    </Query>
                }
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)