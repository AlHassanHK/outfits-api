//! security routes middlewares
const outfits = require("./models/outfitModel");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/outfits", async (req, res) => {
  try {
    const allOutfits = await outfits.find();
    res.status(200).json({ data: allOutfits });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/createOutfit", async (req, res) => {
  try {
    const newOutfit = await outfits.create(req.body);
    res.status(201).json({
      status: "Successfully created item.",
      data: { newOutfit }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
