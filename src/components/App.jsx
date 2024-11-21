import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} onDelete={deleteNote} id={index} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
