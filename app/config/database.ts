import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { resolve } from "path";
import { Dialect } from "sequelize";
import { strUnd } from "../interfaces/types";
import MedicineModel from "../models/productModel";
import StockModel from "../models/inventoryModel"; 
import PatientModel from "../models/patientModel";
import DoctorModel from "../models/doctorModel";

config({ path: resolve(__dirname, "../../.env") });

const dbDialect: Dialect = process.env.DB_DIALECT as Dialect;
const dbHost: strUnd = process.env.DB_HOST;
const dbUserName: strUnd = process.env.DB_USER;
const dbPassword: strUnd = process.env.DB_PASSWORD;
const dbName: strUnd = process.env.DB_NAME;

console.log(dbDialect, dbHost, dbUserName, dbPassword, dbName);

if (!dbDialect || !dbHost || !dbUserName || !dbPassword || !dbName) throw new Error("There aren't all environment variables");

const sequelize = new Sequelize({
    dialect: dbDialect,
    host: dbHost,
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    models: [MedicineModel, StockModel, PatientModel, DoctorModel] // Renombrado aquí también
});

StockModel.belongsToMany(MedicineModel, { through: 'OrderProducts' }); // Renombrado aquí también
MedicineModel.belongsToMany(StockModel, { through: 'OrderProducts' }); // Renombrado aquí también

export default sequelize;
