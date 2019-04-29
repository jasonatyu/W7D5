import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.history.push("/"));
    }

    handleChange(type) {
        return (e) => this.setState({ [type] : e.target.value });
    }

    render() {
        const { errors } = this.props; 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange('username')} value={this.state.username}/>
                    <input type="password" onChange={this.handleChange('password')} value={this.state.password}/>
                    <input type="submit" value={this.props.formType}/>
                </form>
                <ul>
                    { errors.length > 0 ? errors.map((error) => <li>{ error }</li>) : "" }
                </ul>
            </div>
        );
    }
}

export default SessionForm;