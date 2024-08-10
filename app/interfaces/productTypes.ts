export interface ProductType {
    id?: number;
    name: string;
    expirationDate: Date;
    price: number;
    quantity: number;
    deletedAt?: Date;
}
