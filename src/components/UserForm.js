import React, {Component} from 'react'

class UserForm extends Component {

    state = {
        userName: ''
    }

    render() {
        return (
            <div>
                Name: <input type="text" value = {this.state.userName} onChange = {this.handleUserChange}/>
            </div>
        )
    }

    handleUserChange = (ev) => {
        this.setState({
            userName: ev.target.value
        })
    }
}

export default UserForm