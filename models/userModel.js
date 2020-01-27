const mongoose = require('mongoose');

const userSchema = new Schema({
    name : {
        type : String,
        minlength : 5,
        required : true
    },

    firstname : {
        type : String,
        minlength : 5,
        required : true
    },

    email : {
        type : String,
        minlength : 8,
        required : true
    },

    password : {
        type : String,
        minlength : 8,
        required : true
    }
});

const User = mongoose.model("User", userSchema);


