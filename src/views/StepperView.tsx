import { Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import { FormStepper, IStepperViewProps } from "..";

export function StepperView(props: IStepperViewProps) {
    const [activeStep, setActiveStep] = useState(0);
    const submitButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

    /* //Disabled until a future release that fixes multiple bugs
    useEffect(() => {
        if (props.localStorageKey && localStorage.getItem(props.localStorageKey)) {
            const cipherText = localStorage.getItem(props.localStorageKey);
            if (cipherText) {
                const num = parseInt(decrypt(cipherText, props.localStorageKey));
                if(!isNaN(num) && num !== 0)
                    setActiveStep(num);
            }
        }
    }, [])

    useEffect(() => {
        props.localStorageKey && localStorage.setItem(props.localStorageKey, encrypt(activeStep.toString(), props.localStorageKey));
    }, [activeStep]);
    */

    const handleBack = async () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleNext = async () => {
        submitButtonRef.current.click();
    }

    function ActiveForm() {
        const onNext = async () => {
            if (activeStep < props.formsList.length - 1) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
            else if (activeStep === props.formsList.length - 1) {
                props.handleSubmit && props.handleSubmit();
            }
        }

        if (props.formsList[activeStep]) {
            return (
                props.formsList[activeStep]({
                    onNext: onNext,
                    submitButtonRef: submitButtonRef,
                    defaultLocked: props.defaultLocked !== undefined ? props.defaultLocked : false,
                    hideLockButton: props.hideLockButton !== undefined ? props.hideLockButton : true,
                    hidePrintButton: props.hidePrintButton !== undefined ? props.hidePrintButton : true,
                    hideSaveProgressButton: props.hideSaveProgressButton !== undefined ? props.hideSaveProgressButton : true
                })
            )
        }
        else {
            return (
                <Typography>Form Not Found</Typography>
            )
        }
    }

    return (
        <FormStepper
            steps={props.formsList.length}
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            activeForm={<ActiveForm />}
            hideDotsStepper={props.hideDotsStepper}
            className={props.className}
            style={props.style}
            upperClassName={props.upperClassName}
            upperStyle={props.upperStyle}
            lowerClassName={props.lowerClassName}
            lowerStyle={props.lowerStyle}
        />
    )
}