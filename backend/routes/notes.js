const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// ROUTE 1 :- Get all the notes using: GET "/api/notes/fetchallnotes" login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });

    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

// ROUTE 2 :- Add note using: POST "/api/notes/addnote" login required
router.post(
  "/addnote",
  fetchuser,
  [
    // validator for Adding note
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Enter a few lines about note").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      // destructuring concept
      const { title, description, tag } = req.body;
      // If the error occured than return bad request and error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal error occured");
    }
  }
);

// ROUTE 3 :- Edit note using: PUT "/api/notes/updatenote" login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // create a new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (tag) {
      newNote.tag = tag;
    }
    if (description) {
      newNote.description = description;
    }

    // check some validation
    let note = await Notes.findById(req.params.id);
    // check note is present in user's database or not?
    if (!note) {
      return res.status(404).send("Not Found");
    }
    // check users are same or not?
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

// ROUTE 3 :- Delete an existing note using: DELETE "/api/notes/deletenote" login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // check some validation
    let note = await Notes.findById(req.params.id);
    // check note is present in user's database or not?
    if (!note) {
      return res.status(404).send("Not Found");
    }
    // check users are same or not?
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

module.exports = router;
