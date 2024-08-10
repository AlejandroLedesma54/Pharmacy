import StockService from "../services/inventoryService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class StockController {
    static async getStock(req: Request, res: Response): Promise<Response> {
        try {
            const stockService = container.resolve(StockService);
            const stocks = await stockService.findAllStock();
            return res.json({
                status: 200,
                data: stocks
            });
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
}
