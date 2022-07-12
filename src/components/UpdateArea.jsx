import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


function UpdateArea(props) {

  const [note, setNote] = useState({
    title: props.oldTitle,
    content: props.oldContent
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

  function cancelUpdate(event){
    props.onCancel(props.id)
    event.preventDefault();
  }


  return (
    // daddy pop has the className form-div !!
    <div > 

      <Form noValidate validated={validated} onSubmit={updateNote}>

        <Row>
          <Col>
            <h3>Update note</h3>

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
                maxLength="30"
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
                placeholder="content"
                name="content"
                value={note.content}
                onChange={handleChange}
                rows="3"
                maxLength="60"
              />
              <Form.Control.Feedback type="invalid">
                Please add content!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
        <Col>
        <Button variant="outline-secondary" type="submit">UPDATE</Button>{' '}
            <Button variant="outline-secondary" onClick={cancelUpdate}>CANCEL</Button>{' '}
          </Col>
        </Row>
        <>

        </>
      </Form>
    </div>
  );
}

export default UpdateArea;
