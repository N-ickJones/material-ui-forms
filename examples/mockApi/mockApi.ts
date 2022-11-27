
export type Response = {
    status: number;
    data: any;
}

export interface IMockApi<T> {
    get(url: string): Promise<Response>;
    post(url: string, data: T): Promise<Response>;
    put(url: string, data: T): Promise<Response>;
    delete(url: string): Promise<Response>;
}

export class MockApi<T> implements IMockApi<T> {
    constructor(
        private key: string
    ) {}

    idRegex = /\d+/g;
    getId(url: string) {
        try {
            const match = url.match(this.idRegex)
            if (match && match.length > 0) {
                const test = parseInt(match[0]);
                return test;
            }
        }
        catch { console.log('failed to get Id') }
        return null;
    }

    async get(url: string) {
        const id = this.getId(url);
        if (id === null) {
            return {
                status: 200,
                data: this.getData()
            }
        }
        else {
            return {
                status: 200,
                data: this.getDataById(id)
            }
        }
    }
    async post(url: string, postData: T) {
        const data = this.getData();
        const nextIndex = data.length;
        data.push({ ...postData, [this.key]: nextIndex })
        this.setData(data);
        return {
            status: 201, data: this.getDataById(nextIndex)
        }
    }

    async put(url: string, updateData: T) {
        const id = this.getId(url);
        const data = this.getData();
        
        if (id !== null && data.length > id) {
            const index = data.findIndex((item: any) => { 
                return item[this.key] === id 
            })
            data[index] = updateData;
            this.setData(data);
            return {
                status: 204,
                data: null
            }
        }
        else return {
            status: 404,
            data: null
        }
    }

    async delete(url: string) {
        const id = this.getId(url);
        const data = this.getData();
        if (id !== null) {

            const deleteItem = data.find((item: any) => { 
                return item[this.key] === id 
            })

            const updatedData = data.filter((item, _) => {
                return item !== deleteItem
            })
            this.setData(updatedData);

            return {
                status: 200,
                data: deleteItem
            }
        }
        else return {
            status: 404,
            data: null
        }
    }

    getData(): T[] {
        try {
            const json = localStorage.getItem(`${this.key}mockApi`);
            if (json) {
                const data = JSON.parse(json) as T[];
                if (data)
                    return data
            }
        }
        catch { 
            console.log(`unable to load data from localstorage: key ${this.key}mockApi`) 
        }
        return [] as T[];
    }

    getDataById(id: number): T | null {
        try {
            const json = localStorage.getItem(`${this.key}mockApi`);
            if (json) {
                const data = JSON.parse(json) as T[];
                if (data && data.length > id) {
                    return data[id]
                }
            }
        }
        catch { 
            console.log(`unable to load data from localstorage: key ${this.key}mockApi`) 
        }
        return null;
    }
    

    setData(data: T[]) {
        try {
            localStorage.setItem(`${this.key}mockApi`, JSON.stringify(data));
            return true;
        }
        catch {
            console.log(`Unable to update localstorage key: ${this.key}mockApi`);
            return false;
        }
    }
    
}
