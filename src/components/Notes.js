import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(NoteContext);
    const { notes } = context;
  
  return (
    <div className='container my-3'>
        {/* Add Note Component */}
        <AddNote />

        {/* Note item component */}
        <div className='row'>
            <h2>Your Notes</h2>
            {notes.map((note)=>{
            return <NoteItem key={note._id} note={note} />
            })}
        </div>
    </div>
  )
}

export default Notes
