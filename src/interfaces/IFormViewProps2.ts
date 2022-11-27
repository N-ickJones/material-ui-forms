export interface IFormViewProps2 {
    defaultLocked?: boolean;
    hideLockButton?: boolean;
    hidePrintButton?: boolean;
    hideSaveProgressButton?: boolean;
    parentId?: number;
    submitButtonRef?: React.MutableRefObject<HTMLButtonElement>;
    onNext?: () => Promise<void>;
}