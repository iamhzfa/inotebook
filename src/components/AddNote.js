import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

function AddNote() {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [ text, setText ] = useState({title:"", tag:"", description:""})

    const onChange =(e)=> {
      setText({ ...text, [e.target.name]: e.target.value })
    }
    const handleClick =(e)=> {
      e.preventDefault();
      // addNote(text);
      addNote(text.title, text.tag, text.description);
      setText({title:"", tag:"", description:""});
    }
    
  return (
    <div className='container my-3'>
      <h2>Add Note</h2>
        <form>
          <div className="form-group">
            {/* <label htmlFor="exampleFormControlInput1">Title</label> */}
            <input type="text" className="form-control" id="title" name='title' placeholder="Title of your note" value={text.title} onChange={onChange} />
          </div>
          <div className="form-group my-3">
            {/* <label htmlFor="exampleFormControlSelect1">Give Tag</label> */}
            <input type="text" className="form-control" id="tag" name='tag' placeholder="Tag of your note" value={text.tag} onChange={onChange} />
          </div>
          <div className="form-group">
            {/* <label htmlFor="exampleFormControlTextarea1">Description</label> */}
            <textarea className="form-control" id="description" name="description" rows="2" placeholder="Description of your note" value={text.description} onChange={onChange} ></textarea>
          </div>
          <div className='text-center'>
          <button disabled={text.title.length < 3} type='submit' className='btn btn-primary btn-sm mt-3' onClick={handleClick}>Add Note</button>
          </div>
        </form>
    </div>
  )
}

export default AddNote
