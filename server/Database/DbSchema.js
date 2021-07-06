const mongoose = require("mongoose");

const MediumSchema = new mongoose.Schema(
  {
    creatorName: { type: String, required: true },
    postTitle: { type: String, required: true },
    detailPosted: { type: String, required: true },
    detailReading: { type: String, required: true },
    postUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const mediumDB = mongoose.model("mediumurl", MediumSchema);
module.exports = mediumDB;
