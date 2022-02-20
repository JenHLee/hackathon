const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const quesRoutes = require('./routers/question');
const spotRoutes = require('./routers/spot');

const port = process.env.PORT || 8080;
dotenv.config();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use("/", quesRoutes);
app.use("/", spotRoutes);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
.then(()=> console.log('DB Connected'));

mongoose.connection.on ("error",err => {
    console.log(`DB connection error: ${err.message}`);
});

app.get("/",(req,res)=>{
    res.send("hey what's up from express");
})
app.listen(port,()=>{
    console.log(`A Node Js API listening on port: ${port}`);
});