export = LibraryTemplatePlugin;
declare class LibraryTemplatePlugin {
    /**
     * @param {string|string[]|LibraryCustomUmdObject} name name of library
     * @param {string} target type of library
     * @param {boolean} umdNamedDefine setting this to true will name the UMD module
     * @param {string|TODO} auxiliaryComment comment in the UMD wrapper
     * @param {string|string[]} exportProperty which export should be exposed as library
     */
    constructor(name: string | string[] | LibraryCustomUmdObject, target: string, umdNamedDefine: boolean, auxiliaryComment: string | any, exportProperty: string | string[]);
    name: string | string[] | import("../declarations/WebpackOptions").LibraryCustomUmdObject;
    target: string;
    umdNamedDefine: boolean;
    auxiliaryComment: any;
    exportProperty: string | string[];
    /**
     * @param {Compiler} compiler the compiler instance
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace LibraryTemplatePlugin {
    export { LibraryCustomUmdObject, Compiler };
}
type Compiler = import("./Compiler");
type LibraryCustomUmdObject = import("../declarations/WebpackOptions").LibraryCustomUmdObject;
