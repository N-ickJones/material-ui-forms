import { MockApi } from "../mockApi/mockApi";
import Residence from "../models/Residence";

export interface IResidencesController {
    getAll(): Promise<Residence[] | null>;
    get(id: number): Promise<Residence | null>;
    create(residence: Residence): Promise<Residence | null>;
    update(id: number, residence: Residence): Promise<boolean>;
    delete(id: number): Promise<Residence | null>;
}

/**
 * ResidenceController: Common API Methods used for Web Forms
 * mockApi: Simulates an Axios API call to your server
 */

export class ResidencesController implements IResidencesController {
    controller = "/residences";
    mockApi = new MockApi<Residence>("residenceId");

    async getAll() {
        try {
            const response = await this.mockApi.get(`${this.controller}`);
            if (response.status === 200) 
                return response.data as Residence[];
        }
        catch (error) {
            console.log(error);
        }
        return null;
    }

    async get(id: number) {
        try {
            const response = await this.mockApi.get(`${this.controller}/${id}`);
            if (response.status === 200) 
                return response.data as Residence;
        }
        catch (error) {
            console.log(error);
        }
        return null;
    }

    async create(residence: Residence) {
        try {
            const response = await this.mockApi.post(`${this.controller}`, residence)
            if (response.status === 201)
                return response.data as Residence;
        }
        catch(error) {
            console.log(error);
        }
        return null;
    }

    async update(id: number, residence: Residence) {
        try {
            const response = await this.mockApi.put(`${this.controller}/${id}`, residence)
            if (response.status === 204)
                return true;
        }
        catch(error) {
            console.log(error);
        }
        return false;
    }

    async delete(id: number) {
        try {
            const response = await this.mockApi.delete(`${this.controller}/${id}`)
            if (response.status === 200)
                return response.data as Residence;
        }
        catch(error) {
            console.log(error);
        }
        return null;
    }
    
    static get instance() { return residencesController }
}

const residencesController = new ResidencesController();

export default residencesController;