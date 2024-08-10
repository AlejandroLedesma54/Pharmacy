import MedicineRepository from "../repositories/productRepository";
import { injectable, inject } from "tsyringe";

@injectable()
export default class MedicineService {
    constructor(@inject('MedicineRepository') private medicineRepository: MedicineRepository){}

    async findAllMedicine(): Promise<any[]> {
        return await this.medicineRepository.findAllMedicine();
    }

    async findMedicineById(id: number): Promise<any> {
        return await this.medicineRepository.findMedicineById(id);
    }

    async createMedicine(medicine: any): Promise<any> {
        return await this.medicineRepository.createMedicine(medicine);
    }

    async  updateMedicine(id: number, medicine: any): Promise<any> {
        return await this.medicineRepository.updateMedicine(id, medicine);
    }

    async deleteMedicine(id: number): Promise<any> {
        return await this.medicineRepository.deleteMedicine(id);
    }




}