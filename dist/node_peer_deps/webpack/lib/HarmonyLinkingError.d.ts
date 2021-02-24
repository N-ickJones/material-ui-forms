export = HarmonyLinkingError;
declare const HarmonyLinkingError_base: typeof import("./WebpackError");
declare class HarmonyLinkingError extends HarmonyLinkingError_base {
    /** @param {string} message Error message */
    constructor(message: string);
    hideStack: boolean;
}
