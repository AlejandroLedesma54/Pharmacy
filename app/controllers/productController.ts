import ProductService from "../services/productService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class ProductController {
    static async getProducts(req: Request, res: Response): Promise<Response> {
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.findAllProducts();
            return res.json({
                status: 200,
                data: products
            });
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

    static async createProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.createProduct(req.body);
            return res.json({
                status: 200,
                data: product
            });
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

    static async deleteProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.deleteProduct(Number(req.params.id));
            return res.json({
                status: 200,
                data: product
            });
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
}
