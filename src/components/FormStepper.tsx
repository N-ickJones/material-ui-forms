import React, { useState } from 'react';
import { Button, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';



export interface IFormStepperProps {
    steps: number;
    activeStep: number;
    handleNext: () => Promise<void>;
    handleBack: () => Promise<void>;
    handleSubmit: () => Promise<void>;
    activeForm?: React.ReactNode;
}

export function FormStepper(props: IFormStepperProps) {
    //const classes = useStyles();
    //const theme = useTheme();
    const theme = { direction: "rtl" }
    const [submitted, setSubmitted] = useState(false);

    const handleNext = async () => {
        if (submitted) return;
        if (props.activeStep === props.steps - 1) {
            setSubmitted(true);
            props.handleSubmit();
        }
        else {
            props.handleNext();
        }
    }

    const handleBack = async () => {
        if (submitted) return;
        props.handleBack();
    }

    //Add Confirmation Alert on submit

    return (
        <>
            <MobileStepper
                variant={"dots"}
                steps={props.steps}
                position="static"
                activeStep={props.activeStep}
                //className={classes.root}
                nextButton={<div></div>}
                backButton={<div></div>}
            />

            {props.activeForm}

            <MobileStepper
                variant={"progress"}
                steps={props.steps}
                position="static"
                activeStep={props.activeStep}
                ///className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={props.activeStep === props.steps || submitted}>
                        {props.activeStep === props.steps - 1 ? "Submit" : "Next"}
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={props.activeStep === 0  || submitted}>
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </>
    );
}
