import { Grid, TextField } from "@mui/material";
import React from "react";
export function ViewField(props) {
    return (React.createElement(Grid, { item: true, xs: props.xs || 12, ref: props.printRef, className: props.outerClassName, style: props.outerStyle },
        React.createElement(TextField, { className: props.className, style: props.style, fullWidth: true, label: props.label, value: props.value, variant: props.variant, InputLabelProps: { shrink: true }, multiline: true })));
}
