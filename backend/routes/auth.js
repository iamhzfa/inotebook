const express = require('express')
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
// for password hashing and salting
const bcrypt = require('bcryptjs');
// for generating authentication token
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')


const JWT_SECRET = "Thisi$Huzef@" 


// ROUTE 1 :- create a user using: POST "/api/auth/createuser" No login required
router.post('/createuser', [
    // validator for login form
    body('name', "Enter a valid Name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Minimum length of password is 5").isLength({ min: 5 }),
], async(req, res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //  try is used for detecting errors 
    try{
    // check the user with same email is exist or not
    let user = await User.findOne({email : req.body.email});
    if(user){
      return res.status(400).json({error : "Sorry can't create a user with same email"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })


      const data = {
        user : {
          id: user.id
        }
      }

      const jwtToken = jwt.sign(data, JWT_SECRET);       
      res.json({jwtToken})
      // catch is used to catching errors
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal error occured");
    }

})


//  ROUTE 2 :- Authenticate a user login using: POST "/api/auth/login" No login required
router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Write a password").exists(),
], async(req, res)=>{
    //create a flag
    let success = false;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    } 

    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
          return res.status(400).json({success, error: "Please try with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
          res.status(400).json({success, error: "Please try with correct credentials"});
        }
        const data = {
          user : {
            id: user.id
          }
        }
  
        const jwtToken = jwt.sign(data, JWT_SECRET);  
        success = true;     
        res.json({success, jwtToken})

    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal error occured");
  }

})


// ROUTE 3 :- Getting loggedin user data using: POST "/api/auth/fetchData" No login required
router.post('/fetchData', fetchuser, async(req, res)=>{

      try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
        
      }catch(error){
        console.error(error.message);
        res.status(500).send("Internal error occured");
    }
  

})


// exports router
module.exports = router