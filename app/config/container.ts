import { container } from "tsyringe";
import StockRepository from "../repositories/inventoryRepository"; 
import InventoryService from "../services/inventoryService";
import MedicineRepository from "../repositories/productRepository";
import MedicineService from "../services/productService";

container.registerSingleton<StockRepository>("InventoryRepository", StockRepository);
container.registerSingleton<InventoryService>("InventoryService", InventoryService);
container.registerSingleton<MedicineRepository>("MedicineRepository", MedicineRepository);
container.registerSingleton<MedicineService>("MedicineService", MedicineService);
