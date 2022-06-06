import React, { useState } from "react";
import "./App.css";
import Note from "./Note";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CreateNote from "./CreateNote";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert(" i am clicked");
    setAddItem((oldData) => {
      return [...oldData, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((curr_data, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <Navbar />
      <CreateNote passNote={addNote} />
      <div className="notes">
        {addItem.map((val, ind) => {
          return (
            <Note
              key={ind}
              id={ind}
              title={val.title}
              content={val.content}
              deleteNote={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
