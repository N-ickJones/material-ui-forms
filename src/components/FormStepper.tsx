import React from 'react';
import { Button, MobileStepper, useTheme } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

export interface IFormStepperProps {
    steps: number;
    activeStep: number;
    handleNext: () => Promise<void>;
    handleBack: () => Promise<void>;
    activeForm?: React.ReactNode;
    hideDotsStepper?: boolean;
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
        <>
            {!props.hideDotsStepper &&
                <MobileStepper
                    variant={"dots"}
                    steps={props.steps}
                    position="static"
                    activeStep={props.activeStep}
                    nextButton={<div></div>}
                    backButton={<div></div>}
                />
            }

            {props.activeForm}

            <MobileStepper
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
        </>
    );
}