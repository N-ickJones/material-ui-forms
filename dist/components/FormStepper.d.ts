import React from 'react';
export interface IFormStepperProps {
    steps: number;
    activeStep: number;
    handleNext: () => Promise<void>;
    handleBack: () => Promise<void>;
    handleSubmit: () => Promise<void>;
    activeForm?: React.ReactNode;
}
export declare function FormStepper(props: IFormStepperProps): JSX.Element;
