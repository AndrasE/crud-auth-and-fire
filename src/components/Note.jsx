import React, { useState } from "react";
import Popup from "./Popup";
import UpdateArea from "./UpdateArea";


function Note(props) {

  const [buttonPopup, setButtonPopup] = useState(false);
  
  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleUpdateClick() {
    console.log("about to update document:", props.id );
    setButtonPopup(true)
  }

  function updateNote(note) {
    setButtonPopup(false)
    
    props.onUpdate(note, props.id)
  }


  return (

    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <h6>{props.added}</h6>

      <button onClick={handleDeleteClick}>DELETE</button>
      <button onClick={handleUpdateClick}>UPDATE</button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
        <UpdateArea onUpdate={updateNote} />
      </Popup>

    </div>

  );
}

export default Note;
