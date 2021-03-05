import * as React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleOnChange = (e, id) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLoginClick = () => {
        const { username, password } = this.state;
        console.log(username, password);
    }

    render() {
        return (
            <>
                <label>Username</label>
                <input type="text" id="username" name="username" value={this.state.username} onChange={(e) => this.handleOnChange(e)} />
                <br />
                <label>Password</label>
                <input type="password" id="password" name="password" value={this.state.password} onChange={(e) => this.handleOnChange(e)} />
                <br />
                <button type="button" onClick={this.handleLoginClick}>
                    <Link to='/task-manager'>Login</Link>
                </button>
            </>
        )
    }
}

export default LoginForm;