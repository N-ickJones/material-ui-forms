import React from 'react';
import { IFormProps } from '../interfaces/IFormProps';
export interface IFormViewProps<T> {
    submitButtonRef?: React.MutableRefObject<HTMLButtonElement>;
    title: string;
    defaultLocked?: boolean;
    maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    maxNodes: number;
    FormElement: (props: IFormProps<T>) => JSX.Element;
    forms: T[];
    handleLoad: (local: boolean, data?: T[]) => Promise<boolean>;
    handleSubmit?: () => Promise<boolean>;
    handleAddNewItem?: () => Promise<void>;
    handleSaveChanges?: () => Promise<boolean>;
    handleDelete?: (index: number) => Promise<boolean>;
    handleGenerateKey: (item: T) => string;
}
export declare function FormView<T>(props: IFormViewProps<T>): JSX.Element;
