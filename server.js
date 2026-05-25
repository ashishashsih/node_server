// server.js
import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config'; // Load environment variables
// import userRoutes from './routes/users.js'; // Import routes
// import transactionRoutes from './routes/transaction.js'
//import profileRoutes from './routes/profile.js'


// Database connection file (Ensures connection check runs on startup)
//import './config/dbconfig.js'; 

const app = express();
const PORT = process.env.PORT;// || 3000;

// --- Middlewares ---
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// --- Routes ---
// Define the base path for user routes
// app.use('/api/users', userRoutes);
// app.use('/api/transactions', transactionRoutes);
// app.use('/api/profile', profileRoutes);


// Basic root route
app.get('/', (req, res) => {
    console.log("Asma");
  res.send('Welcome to the Asma Express Server!');
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
