import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


function UpdateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [validated, setValidated] = useState(false);


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function updateNote(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      props.onUpdate(note, props.id);
      setNote({
        title: "",
        content: ""
      });
      setValidated(false);
      event.preventDefault();
    }
  }


  return (
    // daddy pop has the className form-div !!
    <div > 

      <Form noValidate validated={validated} onSubmit={updateNote}>

        <Row>
          <Col>
            <h3>Update note!</h3>

            <Form.Group>
              <Form.Label hidden>Title</Form.Label>
              <Form.Control
                required
                type="text"
                id="inlineFormInputName"
                placeholder={props.oldTitle}
                name="title"
                value={note.title}
                onChange={handleChange}
                maxLength="15"
              />
              <Form.Control.Feedback type="invalid">
                Please add a title!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row >
          <Col>
            <Form.Group>
              <Form.Label hidden>Content</Form.Label>
              <Form.Control
                required
                as="textarea"
                id="inlineFormInputName"
                placeholder={props.oldContent}
                name="content"
                value={note.content}
                onChange={handleChange}
                rows="3"
                maxLength="50"
              />
              <Form.Control.Feedback type="invalid">
                Please add content!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
        <Col>
            <Button variant="outline-secondary" type="submit">CANCEL</Button>{' '}
         
            <Button variant="outline-secondary" type="submit">UPDATE</Button>{' '}
          </Col>
          
        </Row>
        <>

        </>
      </Form>
    </div>
  );
}

export default UpdateArea;
