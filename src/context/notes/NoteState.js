import { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {
    
    const n = [
        {
          "_id": "62fb84e98b7ca8dbb5817552",
          "user": "62fb455302f84be1e06673d8",
          "title": "First",
          "description": "This is First",
          "tag": "General",
          "date": "2022-08-16T11:52:09.914Z",
          "__v": 0
        },
        {
          "_id": "62fb85708b7ca8dbb52817554",
          "user": "62fb455302f84be1e06673d8",
          "title": "Second",
          "description": "This is Second",
          "tag": "General",
          "date": "2022-08-16T11:54:24.473Z",
          "__v": 0
        },
        {
          "_id": "62fb84e98b7ca8d1bb5817552",
          "user": "62fb455302f84be1e06673d8",
          "title": "First",
          "description": "This is First",
          "tag": "General",
          "date": "2022-08-16T11:52:09.914Z",
          "__v": 0
        },
        {
          "_id": "62fb85708b7ca81dbb5817554",
          "user": "62fb455302f84be1e06673d8",
          "title": "Second",
          "description": "This is Second",
          "tag": "General",
          "date": "2022-08-16T11:54:24.473Z",
          "__v": 0
        },
        {
          "_id": "62fb84e98b7ca8dbb58117552",
          "user": "62fb455302f84be1e06673d8",
          "title": "First",
          "description": "This is First",
          "tag": "General",
          "date": "2022-08-16T11:52:09.914Z",
          "__v": 0
        },
        {
          "_id": "62fb85708b7ca8dbb25817554",
          "user": "62fb455302f84be1e06673d8",
          "title": "Second",
          "description": "This is Second",
          "tag": "General",
          "date": "2022-08-16T11:54:24.473Z",
          "__v": 0
        },
        {
          "_id": "62fb84e98b7ca8dbb53817552",
          "user": "62fb455302f84be1e06673d8",
          "title": "First",
          "description": "This is First",
          "tag": "General",
          "date": "2022-08-16T11:52:09.914Z",
          "__v": 0
        },
        {
          "_id": "62fb85708b7ca8db3b5817554",
          "user": "62fb455302f84be1e06673d8",
          "title": "Second",
          "description": "This is Second",
          "tag": "General",
          "date": "2022-08-16T11:54:24.473Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(n)

      // Add a Note
      const addNote = (title, description, tag) => {
        console.log("Adding a new note")
        const note ={
          "_id": "62fb85708b7ca8dbd3b5817554",
          "user": "62fb455302f84be1e0667f3d8",
          // "title": "Second added",
          // "description": "This is Second [added]",
          // "tag": "General",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-08-16T11:54:24.473Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }
      // Edit a Note
      const editNote = () => {

      }
      // Delete a Note
      const deleteNote = () => {

      }


    return(
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;