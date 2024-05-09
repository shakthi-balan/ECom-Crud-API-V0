const express = require('express');
const dotenv = require('dotenv').config();
// const morgan = require('morgan');
const mongoose  = require('mongoose');
const Product = require('./products/product.model.js')
const {MongoClient , ServerApiVersion } = require('mongodb');
const productRoutes = require('./products/product.route.js');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;

//routes
app.use("/api/products",productRoutes );


mongoose.connect(dbUrl)
.then(() => {
    console.log("Connected to database!");
    app.listen( PORT , () => {
        console.log(`Server is runnning on Port http://localhost:${PORT}`);  
    })
})
.catch(() => {
    console.log("Connection Failed!");
});

 