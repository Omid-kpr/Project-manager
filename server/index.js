const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Define your routes and middleware here

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});