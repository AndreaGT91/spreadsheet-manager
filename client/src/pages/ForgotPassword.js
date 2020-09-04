import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import backgroundImage from "../images/ac512x512.png";
import { passwordReset } from "../actions/authActions";

const ForgotPassword = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    errors: {}
  });

  const history = useHistory();

  useEffect(() => {
    // If logged in and user navigates to ForgotPassword page, should redirect them to dashboard
    if (props.auth.isAuthenticated) {
      history.push("/Dashboard");
    }
  })

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      errors: props.errors
    }));
  }, [props.errors])

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

    const forgotPassword = {
      email: formData.email,
      password: formData.password,
      password2: formData.password2
    };

    props.passwordReset(forgotPassword, props.history);
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
          <h1 style={{ textAlign: "center" }}>Reset Password</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                autoComplete="email"
                onChange={handleChange}
                value={formData.email}
                error={errors.email}
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
              />
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={handleChange}
                value={formData.password}
                error={errors.password}
                className={classnames("", {
                  invalid: errors.password
                })}
              />
              <span className="red-text">{errors.password}</span>
            </Form.Group>

            <Form.Group controlId="password2">
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

            <hr />
            <Button className="d-block mx-auto" type="submit">
              Save Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
};

ForgotPassword.propTypes = {
  passwordReset: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { passwordReset }
)(withRouter(ForgotPassword));
