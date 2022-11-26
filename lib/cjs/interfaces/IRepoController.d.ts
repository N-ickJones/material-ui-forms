export interface IRepoController<T> {
    getAll(): Promise<T[] | null>;
    get(id: number): Promise<T | null>;
    create(residence: T): Promise<T | null>;
    update(id: number, residence: T): Promise<boolean>;
    delete(id: number): Promise<T | null>;
    getKey(): string;
}
