import React from "react";
import { AlertDialogButton } from "./AlertDialogButton";


export interface IPrintButtonProps {
    displayPrint: () => Promise<void>
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}

export function PrintButton(props: IPrintButtonProps) {
    return (
        <AlertDialogButton
            id={props.id || "printForm"}
            className={props.className}
            style={props.style}
            label="Print"
            title="You have selected to print this document"
            description="This feature was designed to be used in a Chrome Web Browser. Select A4 paper type for the best results."
            color="primary"
            backLabel="Cancel"
            forwardLabel="Print"
            onSubmit={props.displayPrint}
        />
    )
}