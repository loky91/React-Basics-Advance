import * as React from 'react';

class LoginForm extends React.Component<any, any> {

    state = {
        username: '',
        password: ''
    }

    handleOnChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLoginClick = () => {
        const { username, password } = this.state;
        console.log(username, password);
        this.props.history.push('/task-manager');
    }

    render() {
        return (
            <>
                <label>Username</label>
                <input type="text" id="username" name="username" 
                        value={this.state.username} 
                        onChange={(e) => this.handleOnChange(e)} />
                <br />
                <label>Password</label>
                <input type="password" id="password" name="password" 
                        value={this.state.password} 
                        onChange={(e) => this.handleOnChange(e)} />
                <br />
                <button type="button" onClick={this.handleLoginClick}> Login </button>
            </>
        )
    }
}

export default LoginForm;