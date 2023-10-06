const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item: String
},
{
  timestamps: true
});

module.exports = mongoose.model("item", itemSchema);