import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { resolve } from "path";
import { Dialect } from "sequelize";
import { strUnd } from "../interfaces/types";
import MedicineModel from "../models/medicineModel";
import InventoryModel from "../models/inventoryModel";
import PatientModel from "../models/patientModel";
import DoctorModel from "../models/doctorModel";

config({path: resolve(__dirname, "../../.env")});

const dialectDB: Dialect = process.env.DB_DIALECT as Dialect;
const dbHost: strUnd = process.env.DB_HOST;
const dbUserName: strUnd = process.env.DB_USER;
const dbPassword: strUnd = process.env.DB_PASSWORD;
const dbName: strUnd = process.env.DB_NAME;

console.log(dialectDB, dbHost, dbUserName, dbPassword, dbName);


if(!dialectDB || !dbHost || !dbUserName || !dbPassword || !dbName) throw new Error("There aren't all enviroment variables");

const sequelize = new Sequelize({
    dialect: dialectDB,
    host: dbHost,
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    models: [MedicineModel, InventoryModel, PatientModel, DoctorModel]
});

InventoryModel.belongsToMany(MedicineModel, { through: 'OrderProducts' });
MedicineModel.belongsToMany(InventoryModel, { through: 'OrderProducts' });


// // Definir relaciones muchos a muchos
// InventoryModel.belongsToMany(MedicineModel, { through: 'OrderProducts' });
// MedicineModel.belongsToMany(InventoryModel, { through: 'OrderProducts' });

// // Definir relación uno a uno
// PatientModel.hasOne(DoctorModel, { foreignKey: 'patientId' });
// DoctorModel.belongsTo(PatientModel, { foreignKey: 'patientId' });

export default sequelize;



// import PatientModel from './models/patientModel';
// import DoctorModel from './models/doctorModel';

// // Crear un paciente y asignarle un doctor
// async function createPatientWithDoctor() {
//     const patient = await PatientModel.create({ name: 'John Doe' });
//     const doctor = await DoctorModel.create({ name: 'Dr. Smith', patientId: patient.id });
//     console.log('Paciente y doctor creados:', patient, doctor);
// }

// // Obtener el doctor de un paciente
// async function getDoctorOfPatient(patientId: number) {
//     const patient = await PatientModel.findByPk(patientId, { include: DoctorModel });
//     if (patient) {
//         console.log('Doctor del paciente:', patient.Doctor);
//     } else {
//         console.log('Paciente no encontrado');
//     }
// }

// // Actualizar el doctor de un paciente
// async function updateDoctorOfPatient(patientId: number, newDoctorName: string) {
//     const patient = await PatientModel.findByPk(patientId);
//     if (patient) {
//         const doctor = await patient.getDoctor();
//         if (doctor) {
//             doctor.name = newDoctorName;
//             await doctor.save();
//             console.log('Doctor actualizado:', doctor);
//         } else {
//             console.log('Doctor no encontrado');
//         }
//     } else {
//         console.log('Paciente no encontrado');
//     }
// }