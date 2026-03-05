const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const apiRoutes = require('./routes/api');

const app = express();
app.use(express.json());
app.use(cors());

// Use modular routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
