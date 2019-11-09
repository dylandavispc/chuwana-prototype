const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");
bcrypt = require("bcrypt");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: mongoose.SchemaTypes.Email },
  password: { type: String, default: "" }
});

userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};
userSchema.pre("save", function(next) {
  if (!this.local.password) {
    console.log("=======NO PASSWORD PROVIDED=======");
    next();
  } else {
    this.local.password = this.hashPassword(this.local.password);
    next();
  }
  // this.password = this.hashPassword(this.password)
  // next()
});

// userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
