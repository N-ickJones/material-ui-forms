import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Grid, MobileStepper, Button, useTheme } from "@mui/material";
import React from "react";

export interface IFormStepperProps {
    steps: number;
    activeStep: number;
    handleNext: () => Promise<void>;
    handleBack: () => Promise<void>;
    activeForm?: React.ReactNode;
    hideDotsStepper?: boolean;

    className?: string;
    style?: React.CSSProperties;
    upperClassName?: string;
    upperStyle?: React.CSSProperties;
    lowerClassName?: string;
    lowerStyle?: React.CSSProperties;

}

export function FormStepper(props: IFormStepperProps) {
    const theme = useTheme();

    const handleNext = async () => {
        props.handleNext();
    }

    const handleBack = async () => {
        props.handleBack();
    }

    return (
        <Grid className={props.className} style={props.style}>
            <MobileStepper
                className={props.upperClassName} 
                style={props.upperStyle}
                variant={"progress"}
                steps={props.steps}
                position="static"
                activeStep={props.activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={props.activeStep === props.steps}>
                        {props.activeStep === props.steps - 1 ? "Submit" : "Next"}
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                                <KeyboardArrowRight />
                            )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={props.activeStep === 0}>
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                                <KeyboardArrowLeft />
                            )}
                        Back
                    </Button>
                }
            />
            
            {props.activeForm}

            {!props.hideDotsStepper &&
                <MobileStepper
                    className={props.lowerClassName} 
                    style={props.lowerStyle}
                    variant={"dots"}
                    steps={props.steps}
                    position="static"
                    activeStep={props.activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={props.activeStep === props.steps}>
                            {props.activeStep === props.steps - 1 ? "Submit" : "Next"}
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                    <KeyboardArrowRight />
                                )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={props.activeStep === 0}>
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                    <KeyboardArrowLeft />
                                )}
                            Back
                        </Button>
                    }
                />
            }
        </Grid>
    );
}