const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/dineshdb", {})
    .then(() => {
        console.log('db connected');
    })
    .catch(err => {
        console.error('db connection error:', err);
    });

const dbfields = new mongoose.Schema({
    tabletype: {
        type: String
    },
    tableguest: {
        type: Number
    },
    date: {
        type: Date
    },
    time: {
        type: String 
    },
    myemail: {
        type: String
    }
});

const modulefileexport = mongoose.model("Dineshdetails", dbfields);

module.exports = modulefileexport;