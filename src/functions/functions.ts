
export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function dateConvert(date?: string) {
    if (!date) return undefined;
    return date.includes('T') ? date.split('T')[0]: date;
}

export function dateConvertVerbose(date: string) {
    var rDate = new Date(date)
    return rDate.toString();
}

export const isValidId = (id: number) => {
    return id < (Number.MAX_SAFE_INTEGER - 1000);
}

