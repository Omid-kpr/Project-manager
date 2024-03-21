const express = require('express');
const { graphql } = require('graphql');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors');

const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

const app = express();

// Connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

// Define your routes and middleware here

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});