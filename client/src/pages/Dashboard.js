import React, { useState, useEffect } from "react";
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
import API from "../utils/API"
import readSpreadsheet from "../utils/readSpreadsheet";


const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [databases, setDatabases] = useState([{ baseName: "default" }]);
  const [updateView, setUpdateView] = useState(0);

  useEffect(() => {
    getDBs()
  }, [])

  async function getDBs() {
    await API.getBasesByUser(JSON.parse(localStorage.getItem("userID")))
      .then(response => {
        setDatabases(response.data)
      })
      .catch(() => { return [] });
  };

  const handleClose = () => {
    setFileName(null);
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  const handleFileSelect = () => {
    setShowModal(false);

    if (fileName) {
      readSpreadsheet(fileName)
        .then(response => {
          console.log("Response: ", response);
          getDBs();
        })
        .catch(error => {
          console.log("Error reading file: ", error);
          // TODO: Use something other than alert
          alert(fileName.name + " is not a supported type of spreadsheet.");
        });
    }
    else {
      // TODO: Use something other than alert
      alert("No file selected.");
    };

    setFileName(null);
  };

  const fileNameChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0]);
    };
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
        style={{ opacity: 1 }}>

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
            Import
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="d-block mx-auto" style={{ marginTop: "-70%", width: "80%" }}>
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
          {databases.map(base => (
            <ListGroup.Item key={base.baseName.toString()}>
              <Link to={`/BaseTable/${base.baseName}`}>{base.baseName}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  )
};

export default Dashboard;