import StockModel from './inventoryModel';
import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    DeletedAt,
    HasMany,
    AfterCreate,
} from 'sequelize-typescript';

@Table({
    tableName: "product",
    timestamps: true,
})

export default class ProductModel extends Model<ProductModel> {
    static attributes(arg0: string, attributes: any, arg2: {}) {
        throw new Error("Method not implemented.");
    }

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    expiryDate!: Date;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    price!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number;

    @DeletedAt
    @Column({
        type: DataType.DATE
    })
    deletedAt!: Date;

    @HasMany(() => StockModel)
    stocks!: StockModel[];
}
