import cron from 'node-cron';
import { container } from 'tsyringe';
import StockService from './services/inventoryService';

const stockService = container.resolve(StockService);

cron.schedule('25 0 * * *', async () => {
    console.log('Running expiration date validation task at midnight');
    await stockService.validateExpiryDate();
});
