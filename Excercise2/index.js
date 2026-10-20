const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book');
const cors = require ('cors');
const morgan = require ('morgan');

const app = express();

app.use(express.json());

app.use(cors(
{

}
))

// const bookRoutes = require('./routes/book');
app.use('/books', bookRoutes);





mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected locally....'))
  .catch(err => console.error('❌ Connection error:', err));


 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});