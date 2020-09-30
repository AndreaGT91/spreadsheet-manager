import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { loginUser } from "../actions/authActions";
import backgroundImage from "../images/ac512x512.png";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: {}
  });

  const history = useHistory();

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to Dashboard
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

    const userData = {
      email: formData.email,
      password: formData.password,
    };
    props.loginUser(userData);
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
          <h1 style={{ textAlign: "center" }}>Login</h1>
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
              <span className="text-danger">
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
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
              <span className="text-danger">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </Form.Group>

            <Link to="/ForgotPassword">Forgot Password?</Link>
            <Link to="/SignUp" style={{ float: "right" }}>New User?</Link>
            <hr />
            <Button className="d-block mx-auto" variant="success" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);