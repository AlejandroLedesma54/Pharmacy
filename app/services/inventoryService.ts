import InventoryRepository from "../repositories/invetoryRepository";
import { injectable, inject } from "tsyringe";

@injectable()
export default class InventoryService {
    constructor(@inject('InventoryRepository') private inventoryRepository: InventoryRepository){}

    async validateExpiredDate(): Promise<void>{
        const inventories = await this.inventoryRepository.findExpiredInventories();

        for (const inventory of inventories) {
            if (inventory.status !== 'not_available_expired') {
                inventory.status = 'not_available_expired';
                await inventory.save();
                
            }
        }
        
    }
    async findAllInventory(): Promise<any[]> {
        return await this.inventoryRepository.findAllInvetory();
    }

    async findInventoryById(id: number): Promise<any> {
        return await this.inventoryRepository.findInventoryById(id);
    }

    async createInventory(inventory: any): Promise<any> {
        return await this.inventoryRepository.createInventory(inventory);
    }

    async findAvailableMedicines(): Promise<any[]> {
        return await this.inventoryRepository.findAvailableMedicines();
    }

    async findMedicineByStatus(status: string): Promise<any[]> {
        return await this.inventoryRepository.findMedicineByStatus(status);
    }
}