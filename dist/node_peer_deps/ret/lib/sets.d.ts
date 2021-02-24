export function words(): {
    type: number;
    set: ({
        type: number;
        value: number;
        from?: undefined;
        to?: undefined;
    } | {
        type: number;
        from: number;
        to: number;
        value?: undefined;
    })[];
    not: boolean;
};
export function notWords(): {
    type: number;
    set: ({
        type: number;
        value: number;
        from?: undefined;
        to?: undefined;
    } | {
        type: number;
        from: number;
        to: number;
        value?: undefined;
    })[];
    not: boolean;
};
export function ints(): {
    type: number;
    set: {
        type: number;
        from: number;
        to: number;
    }[];
    not: boolean;
};
export function notInts(): {
    type: number;
    set: {
        type: number;
        from: number;
        to: number;
    }[];
    not: boolean;
};
export function whitespace(): {
    type: number;
    set: {
        type: number;
        value: number;
    }[];
    not: boolean;
};
export function notWhitespace(): {
    type: number;
    set: {
        type: number;
        value: number;
    }[];
    not: boolean;
};
export function anyChar(): {
    type: number;
    set: {
        type: number;
        value: number;
    }[];
    not: boolean;
};
