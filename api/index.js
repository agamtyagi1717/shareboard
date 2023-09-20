const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: "GET,POST", // Allow specified HTTP methods
  allowedHeaders: "Content-Type,Authorization", // Allow specified headers
};

app.use(cors(corsOptions));

mongoose.connect(
  "mongodb+srv://agamtyagi1717:SUoDjyCfLStUcKm6@cluster0.yiuynmb.mongodb.net/SharedBoard"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const dataSchema = new mongoose.Schema({
  text: String,
  code: String,
});

const Data = mongoose.model("SavedText", dataSchema, "SavedText");

app.post("/save", (req, res) => {
  const { text, code } = req.body;

  // Create a new document based on the Mongoose model
  const newData = new Data({ text, code });

  Data.create(newData);
});

app.get("/retrieve", async (req, res) => {
  const code = req.query.id;
    
  const data = await Data.findOne({code});
  res.json({ data });
});

const port = 8000; // Set your desired port
app.listen(port);
