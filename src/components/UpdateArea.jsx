import React, { useState } from "react";

function UpdateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

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
    props.onUpdate(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
   }

  return (
    <div className="create-area">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Update title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Update content"
          rows="5"
        />
        <button onClick={updateNote}>Add</button>
      </form>
    </div>
  );
}

export default UpdateArea;
