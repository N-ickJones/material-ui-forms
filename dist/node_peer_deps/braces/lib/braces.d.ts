export = Braces;
/**
 * Customize Snapdragon parser and renderer
 */
declare function Braces(options: any): void;
declare class Braces {
    /**
     * Customize Snapdragon parser and renderer
     */
    constructor(options: any);
    options: any;
    init(options: any): void;
    isInitialized: boolean | undefined;
    snapdragon: any;
    compiler: any;
    parser: any;
    parse(ast: any, options: any): any;
    compile(ast: any, options: any): any;
    expand(pattern: any): any;
    optimize(pattern: any): any;
}
