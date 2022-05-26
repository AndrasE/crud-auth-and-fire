import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


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
    <div className="form-div" >
      <Form noValidate validated={validated} onSubmit={submitNote} >

        <Row >
          <Col >
            <h3>Add new notes</h3>

            <Form.Group>
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
            </Form.Group>
          </Col>
        </Row>

        <Row >
          <Col >
            <Form.Group>
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
            </Form.Group>
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
