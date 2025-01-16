import mongoose from "mongoose";
import express from 'express';
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import cors from "cors";
const app = express()



app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI || "mongodb://localhost:27017/bookStore";
console.log("MongoDB URI*****&&&&:", URI);

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("######### Connected to mongoDB ##########");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes

app.use("/book", bookRoute);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});