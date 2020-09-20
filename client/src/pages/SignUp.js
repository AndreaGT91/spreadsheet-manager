import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { registerUser } from "../actions/authActions";
import backgroundImage from "../images/ac512x512.png";

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
    // If logged in and user navigates to SignUp page, should redirect them to Dashboard
    if (props.auth.isAuthenticated) {
      history.push("/Dashboard");
    }
  });

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
    <>
      <Image 
        className="d-block mx-auto img-fluid w-75"
        style={{ opacity: "0.3" }}
        src={backgroundImage}
        alt="Build A Base Logo">
      </Image>
      <Card className="d-block mx-auto formCard">
        <Card.Body>
          <Link to="/Login" style={{ float: "right", color: "black" }}>x</Link>
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>
          <hr />
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
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
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
            <hr />
            <Button className="d-block mx-auto" variant="success" type="submit">
              Create Account
            </Button>          
          </Form>
        </Card.Body>
      </Card>
    </>
  );
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