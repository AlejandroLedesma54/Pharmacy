"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const SERVER_PORT = process.env.SERVER_PORT || 4000;
const serverApp = (0, express_1.default)();
serverApp.listen(SERVER_PORT, () => {
    console.log("Server is running on port", SERVER_PORT);
});
