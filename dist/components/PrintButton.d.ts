/// <reference types="react" />
export interface IPrintButtonProps {
    displayPrint: () => Promise<void>;
    id?: string;
    className?: string;
}
export declare function PrintButton(props: IPrintButtonProps): JSX.Element;
