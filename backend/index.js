import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 5001;
const mongoDBURL = process.env.mongoDBURL;

const app = express();

app.get('/', (req, res) => {
    console.log(res)
    return res.status(234).send('First route');
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT} 🚀`)
        });
    })
    .catch((error) => {
        console.log(error);
    })