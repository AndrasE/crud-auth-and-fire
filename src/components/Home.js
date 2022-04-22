import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { db } from "./../firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, orderBy, serverTimestamp, query } from "firebase/firestore";



const Home = () => {

  //hook
  const [notes, setNotes] = useState([]);

  //less typing later, creating ref to firebase collection
  const usersCollectionRef = collection(db, "notes")

  const q = query(usersCollectionRef, orderBy("timestamp", "desc"))

  // date/time

  var MyDate = new Date();
  var MyDateString;

  MyDate.setDate(MyDate.getDate() + 20);
  MyDateString = MyDate.getHours() + ":"+ MyDate.getMinutes() +" " + ('0' + MyDate.getDate()).slice(-2) + '/' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + (MyDate.getFullYear()-2000);


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
    console.log("following notes been added:", note);
    await addDoc(usersCollectionRef, { title: note.title, content: note.content, added: MyDateString, timestamp: serverTimestamp() })
  }

  // update note
  const updateNote = async (note, id) => {
     console.log("updating", id, "to:", note);
     await updateDoc(usersCollectionRef, { title: note.title, content: note.content, added: MyDateString, timestamp: serverTimestamp()})
  }
  
  //delete note
  const deleteNote = async (id) => {
    console.log("deleted document`s id:", id);
    await deleteDoc(doc(usersCollectionRef, id));
  }

  return (
    <div>
    <Header/>
      <CreateArea onAdd={createNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            added={noteItem.added}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        );
      })}
      <Footer/>
    </div>
  );
}


export default Home;
