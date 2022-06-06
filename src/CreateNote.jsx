import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Note from "./Note";
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  function getData(e) {
    e.preventDefault();
  }
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    // const value = e.target.value;
    // const name = e.target.name;
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  // show input and button on one click
  const expandIt = () => {
    setExpand(true);
  };

  // hide on double click
  const backNormal = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="main_div">
        <div className="main_note">
          <form>
            <div className="title">
              {expand ? (
                <input
                  name="title"
                  type="text"
                  placeholder="Title Here"
                  autoComplete="off"
                  onChange={inputEvent}
                  value={note.title}
                />
              ) : null}
            </div>
            <textarea
              name="content"
              id=""
              cols="30"
              rows="10"
              placeholder="Write a note...."
              onChange={inputEvent}
              value={note.content}
              onClick={expandIt}
              onDoubleClick={backNormal}
            ></textarea>
          </form>
          {expand ? (
            <button className="btn" type="button" onClick={addEvent}>
              +
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CreateNote;
