const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
// Router
const projectRoutes = require('./src/routes/projectRoutes.js');
// Database connection
dbConnect().then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.error('Database connection error:', err);
});

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', projectRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
