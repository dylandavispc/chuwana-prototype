const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");
bcrypt = require("bcrypt");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: mongoose.SchemaTypes.Email },
    password: {type: String, default: ""}
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;