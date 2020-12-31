const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


app.use(express.json());

app.use('/api/users', require('./routes/userRouter'));

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, () => {
        console.log('MongoDB connected successfuly');
    }
);



app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
});



