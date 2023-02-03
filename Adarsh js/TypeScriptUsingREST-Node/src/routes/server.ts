//import { MONGO_URL } from 'dotenv';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
const mongo = require('./config/config');
const router = express();

//connect to mongo
mongoose
    .connect(mongo)
    .then(() => {
        console.log('connected');
    })
    .catch((error) => {
        console.log(error);
    });
