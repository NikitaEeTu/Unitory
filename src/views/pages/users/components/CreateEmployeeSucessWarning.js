import ReactBSAlert from "react-bootstrap-sweetalert";
import React, { useState } from "react";
import { Button } from "reactstrap";
function CreateEmployeeSucessWarning() {
  const [alert, setalert] = useState(false);
  const successAlert = () => {
    setalert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Success"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="success"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  return (
    <Button color="success" onClick={successAlert}>
      Success alert
    </Button>
  );
}

export default CreateEmployeeSucessWarning;
