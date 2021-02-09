import { ChangeEvent } from "react";
export interface ISubFormProps<T> {
    locked?: boolean;
    printMode?: boolean;
    listIndex: number;
    item: T;
    handleChangeList: (listProperty: string, listIndex: number) => (e: ChangeEvent<HTMLInputElement>, property: string, value: string | boolean) => Promise<void>;
    handleDeleteList: (listProperty: string, listIndex: number, id?: number) => () => Promise<void>;
}
