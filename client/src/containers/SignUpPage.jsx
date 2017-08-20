import React, { Component } from 'react';
import CreateAccount from '../components/CreateAccount';
class SignUpPage extends Component {
    render() {
        return (
            <div>
                <CreateAccount id={this.props.match.params.id}/>
            </div>
        );
    }
}

export default SignUpPage;