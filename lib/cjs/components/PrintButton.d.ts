import React from "react";
export interface IPrintButtonProps {
    displayPrint: () => Promise<void>;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare function PrintButton(props: IPrintButtonProps): JSX.Element;
