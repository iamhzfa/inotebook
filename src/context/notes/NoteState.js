import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const n = [];


  const [notes, setNotes] = useState(n);

  // Get all Notes
  const getNotes = async () => {
    // API call
    // Default options are marked with *
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYjQ1NTMwMmY4NGJlMWUwNjY3M2Q4In0sImlhdCI6MTY2MDY0NjUxMH0.C6wLBY7ITri8KgQXkoN72UTjKqdrHAldiVioCGFCABI'
    },
  });
  const json = await response.json();
  setNotes(json)
  //
  };

  // Add a Note
  const addNote = async (title, tag, description) => {
    // API call
    // Default options are marked with *
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYjQ1NTMwMmY4NGJlMWUwNjY3M2Q4In0sImlhdCI6MTY2MDY0NjUxMH0.C6wLBY7ITri8KgQXkoN72UTjKqdrHAldiVioCGFCABI'
    },
    
    body: JSON.stringify({title, tag, description}) // body data type must match
  });
    const note = await response.json();
  //
    // console.log("Adding a new note");
    setNotes(notes.concat(note));
  };

  // Edit a Note
  const editNote = async (id, title, tag, description) => {
    // const element = notes.filter((note) => {
    //   return note._id === id;
    // });
    // element.title = title;
    // element.tag = tag;
    // element.description = description;

    // API call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYjQ1NTMwMmY4NGJlMWUwNjY3M2Q4In0sImlhdCI6MTY2MDY0NjUxMH0.C6wLBY7ITri8KgQXkoN72UTjKqdrHAldiVioCGFCABI'
    },
    
    body: JSON.stringify({title, tag, description})
  });
  const json = await response.json();
  console.log(json)

  //

    let newNotes = JSON.parse(JSON.stringify(notes))
    // logic for edit in client side
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].tag = tag;
        newNotes[index].description = description;
        break;
      }
    }
    setNotes(newNotes);
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API call
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYjQ1NTMwMmY4NGJlMWUwNjY3M2Q4In0sImlhdCI6MTY2MDY0NjUxMH0.C6wLBY7ITri8KgQXkoN72UTjKqdrHAldiVioCGFCABI'
    },
    });
  const json = await response.json();
  console.log(json)

  //
    const remainingNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(remainingNote);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
