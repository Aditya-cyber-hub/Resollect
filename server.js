// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./db.js");
// const fileRoutes = require("./routes/fileRoutes.js");
// const path = require("path");
// const cors = require("cors");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use("/api", fileRoutes);
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, console.log(`Server running on port ${PORT}`));


const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fileRoutes = require("./routes/fileRoutes.js");
const path = require("path");
const cors = require("cors");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(` Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", fileRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
