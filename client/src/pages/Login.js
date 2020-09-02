import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import NavBar from "../components/NavBar";
import Upload5 from '../images/ac512x512.png';

const inlineStyle2 = {
    
    
  };
 
const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: {}
  });
  const history = useHistory();
  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (props.auth.isAuthenticated) {
      // alert("Already logged in."); 
      history.push("/Dashboard");
    }
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      errors: props.errors
    }));
  }, [props.errors]);

  // useEffect(() => {
  //   if (props.auth.isAuthenticated) {
  //     history.push("/Dashboard") // push user to dashboard when they login
  //   }
  // }, [props.auth.isAuthenticated]);

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
        <Card.Body>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </Form.Group>
            <a href="/forgotpassword">Forgot Password?</a>
            <hr></hr>
            {/* <ButtonGroup aria-label="Login button group"> */}
              <Button style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} variant="primary" type="submit">
                Login
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

  );
}

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