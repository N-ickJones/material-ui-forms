import { ChangeEvent } from "react";

export interface IFormProps<T> {
    index: number;
    locked?: boolean;
    printMode?: boolean;
    values: T;
    handleDelete?: (index: number) => Promise<void>;
    handleAddList?: (index: number, listProperty: string) => Promise<void>;
    handleDeleteList?: (index: number, listProperty: string, listIndex: number) => Promise<void>;
    handlePrintRef?: (index: number) => (el: HTMLDivElement | null) => void;
    onChange: (e: ChangeEvent<HTMLInputElement | {}>, index: number, property: string, value: string | boolean) => void;
    onChangeList?: (index: number, listProperty: string, listIndex: number, property: string, value: string | boolean) => Promise<void>;
}
