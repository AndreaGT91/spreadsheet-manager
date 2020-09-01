import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import "../NavBar/style.scss";
import Logo from '../../images/android-chrome-192x192.png';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navBarClass" sticky="top" fixed="top"    >
        <Navbar.Brand href="/">
          <Image style={{ /* Rectangle 6 */
            width: "87px",
            height: "73px",
          }} src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/SignUp">SignUp</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Login">Login</Nav.Link>
            </Nav.Item>
          </Nav>

          <Form>
            <Form.Row className="align-items-center">

              <Col xs="auto">
                <Link to='/Dashboard'>
                </Link>

              </Col>
            </Form.Row>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
};

export default NavBar;