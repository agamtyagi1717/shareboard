const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(bodyParser.json());
const corsOptions = {
  origin: "https://shareboard.vercel.app", // Allow requests from this origin
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

app.get('/initial', (req, res) => {
  console.log('Connected to the backend');
  res.send('Connected to the backend'); 
});

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

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0");
