const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://bhatmohsin1913:NpnC0xS45S1s8irZ@travel-website.nt48g58.mongodb.net/?retryWrites=true&w=majority&appName=travel-website';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
