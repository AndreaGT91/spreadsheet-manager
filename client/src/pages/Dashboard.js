import React from "react";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import NavBar from "../components/NavBar";
// import Databases from "../components/Databases";

import backgroundImage from "../images/ac512x512.png";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Image 
        className="d-block mx-auto img-fluid w-75"
        style={{ opacity: "0.3" }}
        src={backgroundImage}
        alt="Build A Base Logo">
      </Image>

      {/* <Databases/> */}

      <Container className="d-block mx-auto" style={{ marginTop: "-70%", width: "80%" }}>
        <h1 style={{ textAlign: "center" }}>Your Databases</h1>
        <ListGroup>
          <ListGroup.Item>
            <Link to="/BaseTable/n1010SampleInformation">n1010SampleInformation</Link>
          </ListGroup.Item>
          <ListGroup.Item disabled>
            Other database
            </ListGroup.Item>
          <ListGroup.Item disabled>
            Another database
            </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  )
};

export default Dashboard;