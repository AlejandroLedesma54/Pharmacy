import { Request, Response, NextFunction } from "express";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction): void => {
    console.error(error.stack);
    res.status(500).json({ status: 500, message: error.message });
}

export default errorHandler;
