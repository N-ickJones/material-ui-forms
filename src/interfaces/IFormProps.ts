import { ChangeEvent } from "react";

export interface IFormProps<T> {
    index: number;
    values: T;
    onChange: (e: ChangeEvent<HTMLInputElement | {}>, index: number, property: string, value: string | boolean) => void;
    printMode?: boolean;
    locked?: boolean;
    handleDelete?: (index: number) => Promise<void>;
    onChangeList?: (index: number, listProperty: string, listIndex: number, property: string, value: string | boolean) => Promise<void>;
    handleAddList?: (index: number, listProperty: string) => Promise<void>;
    handleDeleteList?: (index: number, listProperty: string, listIndex: number) => Promise<void>;
}
