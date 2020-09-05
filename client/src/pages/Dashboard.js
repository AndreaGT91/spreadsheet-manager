import React from "react";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import NavBar from "../components/NavBar";

import backgroundImage from "../images/ac512x512.png";

const Dashboard = () => {

  function handleImportClick(event) {
    event.preventDefault();
    console.log("Clicked!");
  };

  return (
    <>
      <NavBar />
      <Image 
        className="d-block mx-auto img-fluid w-75"
        style={{ opacity: "0.3" }}
        src={backgroundImage}
        alt="Build A Base Logo">
      </Image>

      <Container className="d-block mx-auto" style={{ marginTop:"-70%", width:"80%" }}>
        <Row>
          <Col>
            <h1>Your Databases</h1>
          </Col>
          <Col>
            <Button 
              className="float-right" 
              variant="info" 
              style={{ marginTop:"20px" }}
              onClick={handleImportClick}>
              Import
            </Button>
          </Col>
        </Row>
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