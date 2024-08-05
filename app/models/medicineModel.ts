import InventoryModel from './inventoryModel';
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
    tableName: "medicine",
    timestamps: true,
    paranoid: true // Habilita soft delete
})

export default class MedicineModel extends Model<MedicineModel>{
    static atributes(arg0: string, atributes: any, arg2: {}){
        throw new Error("Method not implemented.");
    }
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    expiredDate! : Date

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    price!: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number;

    @DeletedAt
    @Column({
        type: DataType.DATE
    })
    deletedAt!: Date

    @HasMany(() => InventoryModel)
    inventories!: InventoryModel[]

    // @AfterCreate
    // static async createInventory(instance: MedicineModel){
    //     await InventoryModel.create({
    //         medicineId: instance.id,
    //         status: 'available'
    //     })
    // }

}