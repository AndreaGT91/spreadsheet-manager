import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { logoutUser } from "../../actions/authActions";
import Logo from "../../images/android-chrome-192x192.png";

function NavBar(props) {
  const userName = JSON.parse(localStorage.getItem("userName"));

  const history = useHistory();

  function handleLogoutClick(event) {
    event.preventDefault();
    props.logoutUser();
    history.push("/Login");
  };

  useEffect(() => {
    if (!props.auth.isAuthenticated) {
      history.push("/Login")
    }
  }, [history, props.auth.isAuthenticated]); // Causes runtime warning without including history

  return (
    <>
      {/* <Navbar fixed="top" expand="lg" bg="dark" variant="dark"> */}
      <Navbar style={{ height: "10%" }} sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/Dashboard" className="align-middle" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            width="87"
            height="73"
            className="d-inline-block align-top"
            alt="Build A Base Logo"
          />
          {/* <Image 
            style={{ width: "87px", height: "73px" }} 
            src={Logo} 
            alt="Logo"
            fluid>
          </Image> */}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mx-auto">
            <Navbar.Text style={{ fontStyle: "italic" }}>
              Welcome, {userName}
            </Navbar.Text>
            <Nav.Link href="/Dashboard" style={{ marginTop: "15px", marginBottom: "15px" }}>Dashboard</Nav.Link>
            <Nav.Link style={{ marginTop: "15px", marginBottom: "15px" }} onClick={handleLogoutClick}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(NavBar);