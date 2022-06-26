const  express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
const mongoose = require('mongoose');

// routes
const userRoutes = require("./routes/user");

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

app.use('/api', userRoutes);



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})