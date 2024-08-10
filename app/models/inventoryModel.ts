import ProductModel from './productModel';
import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
} from 'sequelize-typescript';

@Table({
    tableName: "stock",
    timestamps: true,

})

export default class StockModel extends Model<StockModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => ProductModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId!: number;

    @Column({
        type: DataType.ENUM,
        values: ['available', 'not_available_out_of_stock', 'not_available_expired'],
        allowNull: false        
    })
    status!: 'available' | 'not_available_out_of_stock' | 'not_available_expired';

    @CreatedAt
    @Column({
        type: DataType.DATE
    })
    createdAt!: Date;

    @UpdatedAt
    @Column({
        type: DataType.DATE
    })
    updatedAt!: Date;

    @DeletedAt
    @Column({
        type: DataType.DATE
    })
    deletedAt!: Date;
}
