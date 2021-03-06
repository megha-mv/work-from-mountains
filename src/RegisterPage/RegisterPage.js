import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import sidebar from '../images/sidebar-login.jpeg'
import {FaUser,FaUserCheck} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {RiLockPasswordFill} from 'react-icons/ri'
import '../App.css'

import { userActions } from '../actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <>
            <div className="img_div">
            <img src={sidebar} width="300px" height="400px" alt="sidebar-img"/>
            </div>
            <div className="login_div" >
                <h2>Sign-Up</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name*<FaUser/></label>
                        <input type="text"  name="firstName" value={user.firstName} onChange={this.handleChange} placeholder ="your name" />
                        {submitted && !user.firstName &&
                            <div >First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name*<FaUserCheck/></label>
                        <input type="text"  name="lastName" value={user.lastName} onChange={this.handleChange} placeholder ="your last name" />
                        {submitted && !user.lastName &&
                            <div >Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username*<FiMail/></label>
                        <input type="text" name="username" value={user.username} onChange={this.handleChange} placeholder ="your email" />
                        {submitted && !user.username &&
                            <div >Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password*<RiLockPasswordFill/></label>
                        <input type="password"  name="password" value={user.password} onChange={this.handleChange} placeholder ="your password"/>
                        {submitted && !user.password &&
                            <div >Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <br/>
                        <button className="btn-primary">Sign-Up</button>
                        {registering && 
                            <img src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt = "From register page"/>
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };