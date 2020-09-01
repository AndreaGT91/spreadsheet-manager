import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Upload3 from '../../images/csvIcon.png';
// import Upload4 from '../../images/excelIcon.png';
// import Upload5 from '../../images/ac512x512.png';
import './style.scss';

function NewFileUploadModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // var wb = XLSX.utils.book_new();
  //     wb.Props = {
  //             Title: "SheetJS Tutorial",
  //             Subject: "Test",
  //             Author: "Red Stapler",
  //             CreatedDate: new Date(2017,12,19)
  //     };

  //     wb.SheetNames.push("Test Sheet");
  //     var ws_data = [['hello' , 'world']];
  //     var ws = XLSX.utils.aoa_to_sheet(ws_data);
  //     wb.Sheets["Test Sheet"] = ws;
  //     var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
  //     function s2ab(s) {

  //             var buf = new ArrayBuffer(s.length);
  //             var view = new Uint8Array(buf);
  //             for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  //             return buf;

  //     }
  //     $(".inputForSheetsJs").click(function(){
  //             saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
  //     });

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