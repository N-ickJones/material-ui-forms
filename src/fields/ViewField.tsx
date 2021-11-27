import { Grid, TextField } from "@mui/material";
import React from "react";
import { BreakPoint } from "..";

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
    outerClassName?: string;
    outerStyle?: React.CSSProperties;
  }
  
  export function ViewField(props: IViewField) {
    return (
      <Grid 
        item xs={props.xs || 12} 
        ref={props.printRef}
        className={props.outerClassName}
        style={props.outerStyle}
      >
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


