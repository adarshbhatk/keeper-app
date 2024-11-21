import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isActive, setIsActive] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    setIsActive(true);
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={() => {
          props.onAdd(note);
          setNote({
            title: "",
            content: "",
          });
          setIsActive(false);
          event.preventDefault();
        }}
      >
        {isActive ? (        
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />) : null}

        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isActive? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isActive}>
        <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
