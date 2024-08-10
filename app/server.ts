import 'reflect-metadata';
import './config/diContainer';
import './scheduler';
import express, { Application as ExpressApp } from 'express';
import database from './config/database';
import cors from 'cors';
import { config as loadEnv } from 'dotenv';
import apiRouter from './routes/apiRouter';
import handleErrors from './middlewares/errorHandler';

loadEnv();

const SERVER_PORT: number | string = process.env.SERVER_PORT || 4000;
const serverApp: ExpressApp = express();

const corsConfig = {
    origin: "http://localhost:5000",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true
};

serverApp.use(cors(corsConfig));
serverApp.use(express.json());
serverApp.use("/api", apiRouter);
serverApp.use(handleErrors);

const initializeServer = async (): Promise<void> => {
    try {
        await database.authenticate();
        console.log("Database connection established successfully");
        await database.sync();
        serverApp.listen(SERVER_PORT, () => {
            console.log("Server is up and running on port", SERVER_PORT);
        });
    } catch (error: any) {
        console.error("Failed to connect to the database", error);
    }
};

initializeServer();
