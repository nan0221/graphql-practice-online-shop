import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/template.css'
import { connect } from 'react-redux';
import { closeEditModal } from '../actions/closeEditModal'

const mapStateToProps = state => ({
    state
})
  
const mapDispatchToProps = dispatch => ({
    closeEditModal: () => dispatch(closeEditModal())
})

  
class Edit extends Component {
    render() {
        return (
            <div className="Edit">
                { this.props.state.editProductReducer.editModalOpen && 
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.props.closeEditModal}>Close</button>
                 }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)