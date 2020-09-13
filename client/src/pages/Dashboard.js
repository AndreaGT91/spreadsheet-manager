import React, { useState } from "react";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import NavBar from "../components/NavBar";
import backgroundImage from "../images/ac512x512.png";
import API from "../utils/API";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState({});

  const handleClose = () => {
      setFileName({});
      setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  const handleFileSelect = () => {
    setShowModal(false);
    API.readSpreadsheet(fileName)
    .then(response => {
      console.log("Response: ", response);
    })
    .catch(error => {
      console.log("Error reading file: ", error);
    });
  };

  const fileNameChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0]);
    };
    
    // console.log(event.target.value);
    // const myURL = URL.createObjectURL(event.target.files[0]);
    // console.log(myURL);
    // URL.revokeObjectURL(myURL);
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

      <Modal 
        show={showModal} 
        onHide={handleClose} 
        aria-labelledby="import-modal"
        centered
        style={{ opacity:1 }}>

        <Modal.Header closeButton>
          <Modal.Title id="import-modal">Import Spreadsheet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File id="fileToImportSelector" label="Select file to import" onChange={fileNameChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="info" onClick={handleFileSelect}>
            Select
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="d-block mx-auto" style={{ marginTop:"-70%", width:"80%" }}>
        <Row>
          <Col>
            <h1>Your Databases</h1>
          </Col>
          <Col>
            <Button
              className="float-right"
              variant="info"
              style={{ marginTop: "20px" }}
              onClick={handleShow}>
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