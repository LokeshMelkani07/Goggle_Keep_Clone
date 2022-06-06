import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { red } from "@mui/material/colors";

import "./App.css";

const Note = (props) => {
  const deleteEvent = () => {
    props.deleteNote(props.id);
  };
  return (
    <>
      <div className="note">
        <h1 style={{ textTransform: "uppercase" }}>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <div className="btnn">
          <button className="deleteIcon btns" onClick={deleteEvent}>
            <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
