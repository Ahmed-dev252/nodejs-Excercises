import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import { protect } from './middlewares/auth.js'; 
import { errorHandler } from './middlewares/errorHandler.js'; 
import { notFound } from './middlewares/notFound.js'; 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

//  Routes
app.use('/auth', authRoutes); 
app.use('/admin', protect, adminRoutes); 

//404 
app.use(notFound);

// Global Error
app.use(errorHandler);

//  DB Server Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch(err => {
    console.error('❌ Database connection failed', err.message);
  });
