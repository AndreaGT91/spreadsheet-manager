import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewFileUploadModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginLeft: '2%' }}>
      <Button variant="primary" onClick={handleShow}>
        New File
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: 'center' }}>Upload your file</Modal.Title>
        </Modal.Header>
        <Modal.Body>CSV, EXCEL and them some...<br></br>
          <Form>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" className="inputForSheetsJs" label="Example file input" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewFileUploadModal;