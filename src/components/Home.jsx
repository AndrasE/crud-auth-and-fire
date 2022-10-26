import React, { useState, useEffect } from "react";
import UpdateArea from "./UpdateArea";
import Popup from "./Popup";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query
} from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap";


const Home = () => {
  ////////////////////hooks(useStates)////////////////////
  //states for all notes for firebase
  const [notes, setNotes] = useState([]);
  //popUp button trigger state
  const [buttonPopup, setButtonPopup] = useState(false);
  //state for the clicked note passed to updateArea popUp
  const [note, setNote] = useState({});
  //state for readering about page instead of home - login
  const [footerClick, setFooterClick] = useState(false);
 
  //less typing later, creating ref to firebase collection
  const usersCollectionRef = collection(db, "notes");

  //timestamp
  const q = query(usersCollectionRef, orderBy("timestamp", "desc"));

  // date/time short with added zeros
  const date = new Date()
  const MyTimeString = date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit"
  });
  const MyDateString = date.toLocaleDateString(navigator.language, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  //get notes from firebase-db on load and/or change in collection
  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  // new note
  const createNote = async (note) => {
    console.log("Note has been created:", note, "at", MyTimeString + " " + MyDateString);
    await addDoc(usersCollectionRef, {
      title: note.title,
      content: note.content,
      added: MyTimeString + " " + MyDateString,
      timestamp: serverTimestamp()
    });
  };

  // update note
  const updateNote = async (note, id) => {
    const myDocRef = doc(db, "notes", id);
    const newFields = { title: note.title, content: note.content };
    await updateDoc(myDocRef, newFields);
    setButtonPopup(false);
    console.log("Note updated!");
  };

  //delete note
  const deleteNote = async (id) => {
    console.log("Note has been deleted! ID:", id);
    await deleteDoc(doc(usersCollectionRef, id));
  };

  //popup using props saving in a state to pass on to update note using org values as placeholder
  const popNote = async (id) => {
    const myDocRef = doc(db, "notes", id);
    const myDoc = await getDoc(myDocRef);
    if (myDoc.exists()) {
      setNote({
        title: myDoc.data().title,
        content: myDoc.data().content,
        added: myDoc.data().added,
        id: id
      });
      console.log("Note`s data:", myDoc.data());
      setButtonPopup(true);
      if (window.innerWidth < 1220) {
        window.scrollTo(0, 285)
    } else {
      window.scrollTo(0, 0)
    }
    } else {
      console.log("Error: Note doesn`t exist!");
    }
  };

  //cancel update popup
  const cancelNoteUpdate = async (id) => {
    console.log("Note update cancelled! ID:", id);
    setButtonPopup(false);
        if (window.innerWidth < 1220) {
         window.scrollTo(0, 0)
  }
}

  //footer clicked - opens
  function footerOpen() {
    setFooterClick(prevState => {
      setFooterClick(!prevState)
    })
  }

  return (
   
    <div style={{ paddingBottom: "20px" }}>

      <Header onClick={footerOpen}/>

    
      { footerClick === false ?
      <div> 
      <Container >
        <Row sm={12}>
          <CreateArea onAdd={createNote} />
          {/* totally not necessary using PopUp after all but heyho here we go leave it her for the future projects*/}
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <UpdateArea onUpdate={updateNote} onCancel={cancelNoteUpdate} oldTitle={note.title} oldContent={note.content} added={note.added} id={note.id} />
          </Popup>
        </Row>
      </Container>

      <hr style={{margin: "3px"}}/>

      <Container fluid>
        <Row>
          {notes.map((noteItem) => {
            return (
              <Col xl={3} lg={4} sm={6}>
                <Note
                  key={noteItem.id}
                  id={noteItem.id}
                  title={noteItem.title}
                  content={noteItem.content}
                  added={noteItem.added}
                  onDelete={deleteNote}
                  onUpdate={popNote}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      </div>
      :
      <About />
      }
      
     
      <Footer/>

    </div>
  );
};

export default Home;
