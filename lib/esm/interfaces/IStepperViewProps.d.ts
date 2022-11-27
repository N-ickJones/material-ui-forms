/// <reference types="react" />
import { IFormViewProps2 } from "./IFormViewProps2";
export interface IStepperViewProps {
    defaultLocked?: boolean;
    formsList: ((props: IFormViewProps2) => JSX.Element)[];
    hideDotsStepper?: boolean;
    hideLockButton?: boolean;
    hidePrintButton?: boolean;
    hideSaveProgressButton?: boolean;
    localStorageKey?: string;
    handleSubmit?: () => Promise<void>;
    className?: string;
    style?: React.CSSProperties;
    upperClassName?: string;
    upperStyle?: React.CSSProperties;
    lowerClassName?: string;
    lowerStyle?: React.CSSProperties;
}
