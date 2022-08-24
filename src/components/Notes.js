import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
// import updateNote from './updateNote';

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  
  const ref = useRef(null);
  const refClose = useRef(null);

  const [text, setText] = useState({
    id: "",
    utitle: "",
    utag: "",
    udescription: ""
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  
  const updateNote = (currentText) => {
    ref.current.click();
    setText({id:currentText._id, utitle: currentText.title, utag: currentText.tag, udescription: currentText.description});
  };

  const handleClick = (e) => {
    editNote(text.id, text.utitle, text.utag, text.udescription)
    refClose.current.click();
  };

  return (
    <div className="container my-3">
      {/* Add Note Component */}
      <AddNote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit Note
              </h5>
              {/* <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="utitle" name="utitle" placeholder="Title of your note" value={text.utitle} onChange={onChange} />
                </div>
                <div className="form-group my-3">
                  <input type="text" className="form-control" id="utag" name="utag" placeholder="Tag of your note" value={text.utag} onChange={onChange} />
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="udescription" name="udescription" rows="2" placeholder="Description of your note" value={text.udescription} onChange={onChange} ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={text.utitle.length < 3} type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Note item component */}
      <div className="row">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {/* if no notes available then display this line */}
        {notes.length === 0 && "There is no notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
      </div>
    </div>
  );
}

export default Notes;
