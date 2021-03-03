import React from 'react';
import { IFormProps } from '../interfaces/IFormProps';
export interface IFormViewProps<T> {
    title?: string;
    forms?: T[];
    defaultLocked?: boolean;
    maxNodes?: number;
    minNodes?: number;
    FormElement?: (props: IFormProps<T>) => JSX.Element;
    handleLoad?: (local: boolean, data?: T[]) => Promise<boolean>;
    handleGenerateKey?: (item: T) => string;
    handleSubmit?: () => Promise<boolean>;
    handleAddNewItem?: () => Promise<void>;
    handleSaveChanges?: () => Promise<boolean>;
    handleDelete?: (index: number) => Promise<boolean>;
    onNext?: () => Promise<void>;
    submitButtonRef?: React.MutableRefObject<HTMLButtonElement>;
    hideLockButton?: boolean;
    hideSaveProgressButton?: boolean;
    hidePrintButton?: boolean;
}
export declare function FormView<T>(props: IFormViewProps<T>): JSX.Element;
