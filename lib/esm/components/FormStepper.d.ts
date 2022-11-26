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
export declare function FormStepper(props: IFormStepperProps): JSX.Element;
