import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Upload5 from '../images/ac512x512.png';
import Image from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';
import { passwordReset } from '../actions/authActions';
import classnames from 'classnames';


const Forgot = (props) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: "",
        errors: {}
    });

    const history = useHistory();

    useEffect(() => {
        // If logged in and user navigates to Forgot page, should redirect them to dashboard
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
        <div>
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
                <h1 style={{ textAlign: "center", marginTop: "3%" }}>New Password</h1>
                <hr></hr>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>


                        <Form.Row>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
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
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
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
                        <Button style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} variant="primary" type="submit">
                            Reset Password
  </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

Forgot.propTypes = {
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
)(withRouter(Forgot));
