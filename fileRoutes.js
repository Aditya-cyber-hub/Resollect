const express = require("express");
const multer = require("multer");
const File = require("../models/File");
const router = express.Router();

// Set Storage Engine
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload File
router.post("/upload", upload.single("file"), async (req, res) => {
  const { name, type } = req.body;

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const file = new File({
    name,
    type,
    filePath: req.file.path,
  });

  await file.save();
  res.status(201).json({ message: "File uploaded successfully", file });
});

// Get All Files
router.get("/files", async (req, res) => {
  const type = req.query.type;
  const query = type ? { type } : {};
  const files = await File.find(query);
  res.json(files);
});

// Get File by ID and Serve Preview
router.get("/preview/:id", async (req, res) => {
  const file = await File.findById(req.params.id);
  if (!file) {
    return res.status(404).send("File not found");
  }
  res.sendFile(`${process.cwd()}/${file.filePath}`);
});

module.exports = router;
