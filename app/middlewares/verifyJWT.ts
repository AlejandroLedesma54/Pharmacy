import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { resolve } from "path";
import { CustomRequest, strUnd } from "../interfaces/types";
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { resolve } from "path";
import { CustomRequest, OptionalString } from "../interfaces/types";

config({ path: resolve(__dirname, "../../.env") });

const verifyJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader: OptionalString = req.headers.authorization;
    if (authHeader) {
        const token: string = authHeader.split(" ")[1];
        const secret: OptionalString = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).json({
                status: 500,
                message: "Secret not found"
            });
        }
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.status(403).json({
                    status: 403,
                    message: "Invalid token"
                });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({
            status: 401,
            message: "Unauthorized"
        });
    }
};

export default verifyJWT;

config({path: resolve(__dirname, "../../.env")});


const verifyJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader: strUnd = req.headers.authorization;
    if(authHeader){
        const token: string = authHeader.split(" ")[1];
        const secret: strUnd = process.env.JWT_SECRET;
        if(!secret){
            return res.status(500).json({
                status: 500,
                message: "Secret not found"
            });
        };
        jwt.verify(token, secret, (err, user) =>{
            if(err){
                return res.status(403).json({
                    status: 403,
                    message: "Invalid token"
                });
            };
            req.user = user;
            next();
        });
    }else{
        res.status(401).json({
            status: 401,
            message: "Unauthorized"
        });
    };

};

export default verifyJWT;