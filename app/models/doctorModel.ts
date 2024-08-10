import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    DeletedAt,
    UpdatedAt,
    CreatedAt,
} from 'sequelize-typescript';

@Table({
    tableName: "physician",
    timestamps: true,
})

export default class PhysicianModel extends Model<PhysicianModel> {
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
    fullName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    contactNumber!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    emailAddress!: string;

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

    @CreatedAt
    @Column({
        type: DataType.DATE
    })
    createdAt!: Date;
}
