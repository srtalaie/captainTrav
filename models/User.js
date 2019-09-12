let mongoose = require("mongoose");

let Schema =  mongoose.Schema;

//Create article schema
let UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    }
});

let User = mongoose.model("User", UserSchema);
module.exports = User;