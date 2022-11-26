import { IFormHandler, FormArgs } from "..";
export declare class FormHandler<T> implements IFormHandler<T> {
    constructor(args: FormArgs<T>);
    forms: T[];
    private uuid;
    private formsState;
    private key;
    private controller;
    load: (local: boolean, data?: any) => Promise<boolean>;
    addNew: () => Promise<void>;
    delete: (index: number) => Promise<boolean>;
    submit: () => Promise<boolean>;
    private create;
    private update;
    saveChanges: () => Promise<boolean>;
    generateKey: (item: T) => string;
    private setState;
}
