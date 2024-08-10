import { injectable } from "tsyringe";
import StockModel from "../models/inventoryModel";
import ProductModel from "../models/productModel";
import { GroupedCountResultItem, Op } from "sequelize";

@injectable()
export default class StockRepository {
    async findAllStock(): Promise<StockModel[]> {
        return await StockModel.findAll();
    }

    async findExpiredStock(): Promise<StockModel[]> {
        return await StockModel.findAll({
            include: [{
                model: ProductModel,
                where: {
                    expiredDate: {
                        [Op.lte]: new Date()
                    }
                }
            }]
        });
    }

    async findStockById(id: number): Promise<StockModel | null> {
        return await StockModel.findByPk(id);
    }

    async createStock(stock: StockModel): Promise<StockModel> {
        return await StockModel.create(stock);
    }

    async findAvailableProducts(): Promise<any[]> {
        return await StockModel.findAll({
            attributes: ['id', 'status'],
            include: [{
                model: ProductModel,
                attributes: ['name', 'expiredDate', 'quantity', 'price'],
                where: {
                    status: 'available'
                }
            }]
        });
    }

    async deleteStock(id: number): Promise<number> {
        return await StockModel.destroy({
            where: { id: id }
        });
    }

    async findStockByProductId(productId: number): Promise<StockModel | null> {
        return await StockModel.findOne({
            where: { productId: productId }
        });
    }

    async countAvailableProducts(): Promise<number> {
        return await StockModel.count({ where: { status: 'available'} });
    }

    async findProductByStatus(status: string): Promise<StockModel[]> {
        return await StockModel.findAll({
            where: { status: status },
            include: [{
                model: ProductModel,
                required: true 
            }]
        });
    }
}
