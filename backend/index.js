require('dotenv').config(); // Load environment variables
const express = require("express");
const cors = require('cors');
const connectToMongo = require("./src/config/db");

const app = express();
const port = process.env.PORT || 5000; // Set a default port if not defined in .env

// Connect to MongoDB
connectToMongo();

// CORS configuration
const allowedOrigins = ['http://localhost:5173', 'https://redhouse-edtech.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true // If you want to allow cookies or HTTP authentication
}));

app.use(express.json());

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/subjects", require("./src/routes/subjectRoutes"));
app.use("/api/quizzes", require("./src/routes/quizRoutes"));
app.use('/api/contactUs', require("./src/routes/contactRoutes"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
