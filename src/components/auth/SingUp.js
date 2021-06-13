import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.id === 'firstName') {
      setFirstName(e.target.value);
    }
    if (e.target.id === 'lastName') {
      setLastName(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp({ email, password, firstName, lastName });
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  if (props.auth.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container z-depth-1">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            id="firstName"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={lastName}
            id="lastName"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Sign Up</button>
          <div className="red-text center">
            {props.authError ? <p>{props.authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
