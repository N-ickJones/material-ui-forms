/// <reference types="react" />
import { FormHandler } from "../handlers";
import { IFormProps } from "./IFormProps";
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
