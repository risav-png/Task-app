
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//Express middleware
app.use(express.json());

//Routes
const taskRouter = require('./Routes/tasks');
app.use('/task',taskRouter);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log('Connected to Database'));

//main Server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

