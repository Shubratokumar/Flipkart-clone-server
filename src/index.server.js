const  express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");

// environment variable
env.config();

// middleware
app.use(cors());
app.use(express.json());

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