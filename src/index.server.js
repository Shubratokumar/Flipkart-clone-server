const  express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
const mongoose = require('mongoose');

// environment variable
env.config();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (mongoose)
// mongodb+srv://admin:<password>@cluster0.wdnsw.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wdnsw.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("MongoDB Database Conntected.")
});


// GET API
app.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Hello from Flipkart Server"
    })
})
// POST API
app.post('/data', (req, res, next)=>{
    res.status(200).json({
        message: req.body
    })
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})