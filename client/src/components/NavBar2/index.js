import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import "./style.scss";
import Logo from '../../images/android-chrome-192x192.png';

function NavBar2(props) {
  const history = useHistory();

  function handleLogoutClick(event) {
    event.preventDefault();
    props.logoutUser();
  };

  useEffect(() => {
    if (!props.auth.isAuthenticated) {
      history.push("/Login")
    }
  }, [props.auth.isAuthenticated]);

  return (
    <>
      <Navbar className="navBarClass" fixed="top" expand="lg" bg="dark" variant="dark">
        {/* <Navbar style={{ height: '10%' }} className="navBarClass" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
        <Navbar.Brand href="/Home">
          <Image style={{
            width: "87px",
            height: "73px",
          }} src={Logo} fluid />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className="mr-auto">
          <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
        </Nav>
        <Form>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Link to='/Login'>
                <Button
                  style={{ backgroundColor: "#ff9000" }}
                  onClick={handleLogoutClick}
                >logout
                  </Button>
              </Link>
            </Col>
          </Form.Row>
        </Form>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </>
  );
};

NavBar2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(NavBar2);