import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
// import updateNote from './updateNote';

function Notes() {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;

    const [ text, setText ] = useState({title:"", description:"", tag:"General"})

    useEffect(() => {
      getNotes();
       // eslint-disable-next-line
    }, [])

    const onChange =(e)=> {
      setText({ ...text, [e.target.name]: e.target.value })
    }
    const handleClick =(e)=> {
        e.preventDefault();
    }

    const ref = useRef(null);
    
    const updateNote = (note) => {
      ref.current.click();
    };

  return (
    <div className='container my-3'>
        {/* Add Note Component */}
        <AddNote />

        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" >
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
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
            {/* <label htmlFor="exampleFormControlInput1">Title</label> */}
            <input type="text" className="form-control" id="title" name='title' placeholder="Title of your note" onChange={onChange} />
          </div>
          <div className="form-group my-3">
            {/* <label htmlFor="exampleFormControlSelect1">Give Tag</label> */}
            <input type="text" className="form-control" id="tag" name='tag' placeholder="Tag of your note" onChange={onChange} />
          </div>
          <div className="form-group">
            {/* <label htmlFor="exampleFormControlTextarea1">Description</label> */}
            <textarea className="form-control" id="description" name="description" rows="2" placeholder="Description of your note" onChange={onChange} ></textarea>
          </div>
        </form>

            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary btn-sm">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Note item component */}
        <div className='row'>
            <h2>Your Notes</h2>
            {notes.map((note)=>{
            return <NoteItem key={note._id} updateNote={updateNote} note={note} />
            })}
        </div>
    </div>
  )
}

export default Notes
