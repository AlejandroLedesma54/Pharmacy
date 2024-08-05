import MedicineModel from './medicineModel';
import{
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    HasMany,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    AfterCreate
} from 'sequelize-typescript';

@Table({
    tableName: "inventory",
    timestamps: true,
    paranoid: true // Habilita soft delete
})

export default class InventoryModel extends Model<InventoryModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!:number;

    @ForeignKey(() => MedicineModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    medicineId!: number;

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

