  
import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import Upload5 from '../images/ac512x512.png';
import NavBar from "../components/NavBar";
import { registerUser } from '../actions/authActions';

const inlineStyle2 = {
  background: 'linear-gradient(180deg, #e4f5fc 10%, white 50%, white)'
};

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  });

  const history = useHistory();

  useEffect(() => {
    // If logged in and user navigates to SignUp page, should redirect them to dashboard
    if (props.auth.isAuthenticated) {
      // alert("Already logged in."); 
      history.push("/Dashboard");
    }
  })

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      errors: props.errors
    }));
  }, [props.errors]);

  function handleChange(event) {
    event.persist();

    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
      errors: {}
    }))
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      password2: formData.password2
    };

    props.registerUser(newUser, props.history);
  };

  const { errors } = formData;

  return (
    <div style={inlineStyle2}>
      <NavBar />
      <Image style={{ /* Rectangle 6 */
        width: "900px",
        height: "900px",
        opacity: "0.3",
        marginTop: "1%",

        marginLeft: "15%",
        position: "relative",
      }} src={Upload5}></Image>
      <Card style={{ marginTop: "-50%", marginBottom: "10%", width: "30%", marginRight: "auto", marginLeft: "auto" }}>
        <h1 style={{ textAlign: "center", marginTop: "3%" }}>Fill out information below</h1>
        <hr></hr>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="firstName"
                  placeholder="First Name"
                  autoComplete="fname"
                  onChange={handleChange}
                  value={formData.firstName}
                  error={errors.firstName}
                  className={classnames("", {
                    invalid: errors.firstName
                  })}
                />
                <span className="red-text">{errors.firstName}</span>
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="lastName"
                  placeholder="Last Name"
                  autoComplete="lname"
                  onChange={handleChange}
                  value={formData.lastName}
                  error={errors.lastName}
                  className={classnames("", {
                    invalid: errors.lastName
                  })}
                />
                <span className="red-text">{errors.lastName}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  autoComplete="email"
                  value={formData.email}
                  error={errors.email}
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <span className="red-text">{errors.email}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={formData.password}
                  error={errors.password}
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <span className="red-text">{errors.password}</span>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="password2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Verify Password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={formData.password2}
                  error={errors.password2}
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <span className="red-text">{errors.password2}</span>
              </Form.Group>
            </Form.Row>
            <hr></hr>
            <Button style={{  marginLeft: "auto", marginRight: "auto", display:"block"  }} variant="primary" type="submit">
              Create Account
            </Button>          
              {/* {' '}
              <Button style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} variant="primary" type="reset">
                Cancel
              </Button>
            </ButtonGroup> */}
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
};

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));