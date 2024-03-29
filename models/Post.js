const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
    required: true,
  },
  phase: {
    type: Number,
    required: true,
  },
  lot: {
    type: Number, 
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// MongoDB Collection Named here - will give lowercase plural of name
module.exports = mongoose.model("Post", PostSchema);
