import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";


function CreateArea(props) {
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

  function submitNote(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
      setValidated(false);
      event.preventDefault();
    }
  }


  return (
    <div className="form-div update-div" >
      <Form noValidate validated={validated} onSubmit={submitNote} >

        <Row >
          <Col >
            <h3>Add new notes</h3>

            <FormGroup>
              <Form.Label hidden>Title</Form.Label>
              <Form.Control
                required
                type="text"
                id="inlineFormInputName"
                placeholder="title"
                name="title"
                value={note.title}
                onChange={handleChange}
                maxLength="15"
              />
              <Form.Control.Feedback type="invalid">
                Please add a title!
              </Form.Control.Feedback>
            </FormGroup>
          </Col>
        </Row>

        <Row >
          <Col >
            <FormGroup>
              <Form.Label hidden>Content</Form.Label>
              <Form.Control
                required
                as="textarea"
                id="inlineFormInputName"
                placeholder="content"
                name="content"
                value={note.content}
                onChange={handleChange}
                rows="3"
                maxLength="50"
              />
              <Form.Control.Feedback type="invalid">
                Please add content!
              </Form.Control.Feedback>
            </FormGroup>
          </Col>
        </Row>
        
        <Row>
          <Col>

            <Button variant="outline-secondary" type="submit">ADD</Button>{' '}
          </Col>
        </Row>
        <>

        </>
      </Form>
    </div>
  );
}

export default CreateArea;
