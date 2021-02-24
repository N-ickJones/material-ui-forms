import React from "react";
import { AlertDialogButton } from "./AlertDialogButton";

export interface IPrintButtonProps {
    displayPrint: () => Promise<void>
    id?: string;
    className?: string;
}

export function PrintButton(props: IPrintButtonProps) {
    return (
        <AlertDialogButton
            id={props.id || "printForm"}
            className={props.className || "m-1"}
            label="Print"
            title="You have selected to print this document"
            description="This feature was designed to be used in a Chrome Web Browser. Using a different browser might cause issues with printing."
            color="primary"
            backLabel="Cancel"
            forwardLabel="Print"
            onSubmit={props.displayPrint}
        />
    )
}