import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT} 🚀`)
});