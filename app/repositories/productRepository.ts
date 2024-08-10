import { injectable } from "tsyringe";
import StockModel from "../models/inventoryModel";
import ProductModel from "../models/productModel";
import { Op } from "sequelize";

@injectable()
export default class ProductRepository {

    async findAllProducts(): Promise<ProductModel[]> {
        return await ProductModel.findAll();
    }

    async updateProductQuantity(productId: number, newQuantity: number): Promise<[affectedCount: number]> {
        return await ProductModel.update(
            { quantity: newQuantity },
            { where: { id: productId } }
        );
    }

    async findProductById(id: number): Promise<ProductModel | null> {
        return await ProductModel.findByPk(id);
    }

    async createProduct(product: ProductModel): Promise<ProductModel> {
        return await ProductModel.create(product);
    }

    async updateProduct(id: number, product: Partial<ProductModel>): Promise<[affectedCount: number]> {
        const [affectedCount] = await P
