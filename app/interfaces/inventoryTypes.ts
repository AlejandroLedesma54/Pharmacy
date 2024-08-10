export interface StockType {
    id?: number;
    productId: number;
    status?: 'available' | 'not_available_out_of_stock' | 'not_available_expired';
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    save?: () => Promise<void>;
}
