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
    UpdatedAt,
    CreatedAt,
} from 'sequelize-typescript';

@Table({
    tableName: "doctor",
    timestamps: true,
})

export default class DoctorModel extends Model<DoctorModel>{
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
        type: DataType.STRING,
        allowNull: false
    })
    phone!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string

    @UpdatedAt
    @Column({
        type: DataType.DATE
    })
    updatedAt!: Date

    @DeletedAt
    @Column({
        type: DataType.DATE
    })
    deletedAt!: Date

    @CreatedAt
    @Column({
        type: DataType.DATE
    })
    createdAt!: Date
}