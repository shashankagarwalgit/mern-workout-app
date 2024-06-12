const express = require('express');
require('dotenv').config().parsed;
const cors = require('cors');
const workoutRouter = require('./routes/workouts');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
console.log(req.path,req.method);
next();
});

app.use('/api/workouts',workoutRouter);

mongoose.connect('mongodb://127.0.0.1:27017/workoutdb').then(()=>{
    app.listen(PORT, () => {
        console.log(`Connected to DB & Server started at port ${PORT}`);
    }
    );
}
).catch((err)=>{
    console.log('Failed to connect to MongoDB',err);
}
);
