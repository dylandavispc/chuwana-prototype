const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/chuwana-prototypeDB"
);

const userSeed = [
    {
        first_name: "John",
        last_name: "Doe1",
        email: "johndoe1@gmail.com",
        password: "Johndoe1!"
    },
    {
        first_name: "John",
        last_name: "Doe2",
        email: "johndoe2@gmail.com",
        password: "Johndoe1!"
    },
    {
        first_name: "John",
        last_name: "Doe3",
        email: "johndoe3@gmail.com",
        password: "Johndoe1!"
    },
    {
        first_name: "John",
        last_name: "Doe4",
        email: "johndoe4@gmail.com",
        password: "Johndoe1!"
    },
    {
        first_name: "John",
        last_name: "Doe5",
        email: "johndoe5@gmail.com",
        password: "Johndoe1!"
    },
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " users inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })