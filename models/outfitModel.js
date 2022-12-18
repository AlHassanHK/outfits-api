const mongoose = require("mongoose");

const outfitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  colour: {
    type: String,
    required: true
  },
  season: {
    type: String,
    required: true
  }
});

const outfits = mongoose.model("outfits", outfitSchema);

module.exports = outfits;
