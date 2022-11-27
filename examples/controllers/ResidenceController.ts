import { IRepoController } from "material-ui-forms";
import Residence from "../models/Residence";
import Axios, { AxiosInstance } from "axios";
import { MockApi } from "../mockApi/mockApi";

/**
 * ResidenceController: Common API Methods used for Web Forms
 * mockApi: Simulates an Axios API call to your server
 */
 export class RepoController<T> implements IRepoController<T> {
    constructor(props: { key: string, uri: string, api: AxiosInstance | MockApi<T> }) {
        this.key = props.key;
        this.controller = props.uri;
        this.mockApi = props.api;
    }
    key: string;
    controller: string;
    mockApi: any;

    async getAll() {
        try {
            const response = await this.mockApi.get(`${this.controller}`);
            if (response.status === 200) 
                return response.data as T[];
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
                return response.data as T;
        }
        catch (error) {
            console.log(error);
        }
        return null;
    }

    async create(residence: T) {
        try {
            const response = await this.mockApi.post(`${this.controller}`, residence)
            if (response.status === 201)
                return response.data as T;
        }
        catch(error) {
            console.log(error);
        }
        return null;
    }

    async update(id: number, residence: T) {
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
                return response.data as T;
        }
        catch(error) {
            console.log(error);
        }
        return null;
    }

    getKey() {
        return this.key;
    }
    
    static get instance() { return residencesController }
}

//This is an example Only of what should be passed into the api variable.
const exampleApi = Axios.create({
    baseURL: "https://example.com",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export class ResidencesController extends RepoController<Residence> {
    constructor() { 
        super({
            key: "residenceId",
            uri: "/residences",
            api: new MockApi<Residence>("residenceId")
        }); 
    }
    
    static get instance() { return residencesController }
}

const residencesController = new ResidencesController();

export default residencesController;



//This can vary depending on API.. this is mostly just an example
