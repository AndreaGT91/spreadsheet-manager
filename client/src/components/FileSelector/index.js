import React from "react";
import Form from "react-bootstrap/Form";

function FileSelector() {

  function handleChange(event) {
    event.preventDefault();
    console.log("Handle change");
  };

  return (
    <Form>
      <Form.Group>
        <Form.File 
          id="fileToImportSelector" 
          label="Select file to import" 
          // className="position-relative"
          // required
          name="fileSelector"
          label="File"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  )
};

export default FileSelector;