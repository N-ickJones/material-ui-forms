import React from 'react';
import { IFormProps } from '../interfaces/IFormProps';
import { FormHandler } from '../handlers/FormHandler';
export interface IFormViewAutoProps<T> {
    title?: string;
    defaultLocked?: boolean;
    maxNodes?: number;
    minNodes?: number;
    FormElement?: (props: IFormProps<T>) => JSX.Element;
    formHandlerRef: React.MutableRefObject<FormHandler<T>>;
    onNext?: () => Promise<void>;
    submitButtonRef?: React.MutableRefObject<HTMLButtonElement>;
    hideLockButton?: boolean;
    hideSaveProgressButton?: boolean;
    hidePrintButton?: boolean;
}
export declare function FormViewAuto<T>(props: IFormViewAutoProps<T>): JSX.Element;
