import { PaperSize } from "../types/types";
export declare function getRandomInt(min: number, max: number): number;
export declare function sleep(milliseconds: number): Promise<unknown>;
export declare function dateConvert(date?: string): string | undefined;
export declare function dateConvertVerbose(date: string): string;
export declare const isValidId: (id: number) => boolean;
export declare function uuidv4(): string;
/**
 * Obfuscation use only
 * @param plainText
 * @param key
 */
export declare function encrypt(plainText: string, key: string): string;
/**
 * Obfuscation use only
 * @param cipherText
 * @param key
 */
export declare function decrypt(cipherText: string, key: string): string;
export declare function getOrdinal(n: number): string;
export declare type PageBreakDiv = {
    element: HTMLDivElement;
    marginBottom: string;
};
export declare const getPaperHeight: (paper: PaperSize | undefined) => number;
export declare const getPaperWidth: (paper: PaperSize | undefined) => number;
export declare const marginToPixels: (paper: PaperSize, margin: number | undefined) => number;
