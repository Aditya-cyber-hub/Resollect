const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ["document", "image", "video"] },
    filePath: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
