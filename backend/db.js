const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongoose Succesfully");
    })
}

module.exports = connectToMongo;