import { Router } from 'express';
import StockController from '../controllers/inventoryController';

const stockRouter = Router();
stockRouter.get('/', StockController.getStock);

export default stockRouter;
