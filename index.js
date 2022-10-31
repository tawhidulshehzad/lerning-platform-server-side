const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());

const categories = require("./data/categories.json");
// Classes data take
const classes = require("./data/classes.json");

// Basic api call
app.get("/", (req, res) => {
  res.send("course appi running");
});

// Category API call
app.get("/categories", (req, res) => {
  res.send(categories);
});

// classes acording to categories
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(classes);
  } else {
    const categoryClass = classes.filter((c) => c.category_id === id);
    res.send(categoryClass);
  }
});

// all class loading

app.get("/classes", (req, res) => {
  res.send(classes);
});

// premium api call 
app.get("/premium/:id", (req, res) => {
  const id = req.params.id;
  const slectedClass = classes.find((c) => c._id === id);
  res.send(slectedClass);
});


// classes api call
app.get("/classes/:id", (req, res) => {
  const id = req.params.id;
  const slectedClass = classes.find((c) => c._id === id);
  res.send(slectedClass);
});

app.listen(port, () => {
  console.log("working", port);
});
