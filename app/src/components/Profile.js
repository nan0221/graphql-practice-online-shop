import React, { Component } from 'react'

class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.setState({ profile: {} })
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
        const { profile } = this.state
        return (
            <div className="container">
                <pre className="text-left">{JSON.stringify(profile, null, 2)}</pre>
            </div>
        )
    }
}

export default Profile