const express = require("express");
const app = express();

// call database
const link = require("./config/db");

app.get("/", (req, res) => res.send("Server berjalan dengan baik"));

// urlencoded
app.use(express.urlencoded({ extended: true }));

link.authenticate().then(() => console.log("berhasil terkonskesi db"));

// call User
const User = require("./models/User");

// CREATE
app.post("/crud", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
});

// READ
app.get("/all", async (req, res) => {
  try {
    const getAllUser = await User.findAll({});

    res.json(getAllUser);
  } catch (error) {
    console.log(error);
  }
});

// UPDATE

// DELETE

app.listen(5000, () => console.log("koneksi berjalan di 5000"));
