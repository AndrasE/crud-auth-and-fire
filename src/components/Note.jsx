import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function Note(props) {

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleUpdateClick() {
    console.log("Note update has been initialized! ID:", props.id);
    props.onUpdate(props.id);
  }


  return (
    <div className="note">
      <Row>
        <Col>
          <h4>{props.title}</h4>
        </Col>
      </Row>

      <Row>
        <Col>
          <h5>{props.content}</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>@{props.added}</p>
        </Col>
      </Row>

      <Row>
        <Col>
         <Button variant="outline-secondary" onClick={handleDeleteClick}>
            DELETE
          </Button>{" "}
          <Button variant="outline-secondary" onClick={handleUpdateClick}>
            UPDATE
          </Button>{" "}     
        </Col>
      </Row>
      <></>
    </div>
  );
}

export default Note;
