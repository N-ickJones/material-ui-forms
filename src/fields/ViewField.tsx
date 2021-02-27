import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import { BreakPoint } from "../types/types";

export interface IViewField {
    type?: string;
    shrink?: boolean;
    xs?: BreakPoint;
    label?: string;
    value?: any;
    variant?: "filled" | "outlined" | "standard" | undefined;
    printRef?: (el: HTMLDivElement | null) => void;
    className?: string;
    style?: React.CSSProperties;
  }
  
  export function ViewField(props: IViewField) {
    return (
      <Grid item xs={props.xs || 12} ref={props.printRef}>
        <TextField
          className={props.className}
          style={props.style}
          fullWidth
          label={props.label}
          value={props.value}
          variant={props.variant}
          InputLabelProps={{ shrink: true }}
          multiline={true}
        />
      </Grid>
    )
  }


