export function chownr(cache: any, filepath: any): Promise<any>;
export namespace chownr {
    export { fixOwnerSync as sync };
}
export function mkdirfix(cache: any, p: any, cb: any): Promise<any>;
export namespace mkdirfix {
    export { mkdirfixSync as sync };
}
declare function fixOwnerSync(cache: any, filepath: any): null | undefined;
declare function mkdirfixSync(cache: any, p: any): any;
export {};
