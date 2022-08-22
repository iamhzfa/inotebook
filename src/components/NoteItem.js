import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

function NoteItem(props) {
    const {note, updateNote} = props;
    const context = useContext(NoteContext);
    const { deleteNote } = context;

  return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body" >
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                    <i className="far fa-trash-alt" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
     
      
  )
}

export default NoteItem
