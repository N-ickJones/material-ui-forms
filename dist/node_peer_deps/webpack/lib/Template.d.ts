export = Template;
declare class Template {
    /**
     *
     * @param {Function} fn a runtime function (.runtime.js) "template"
     * @returns {string} the updated and normalized function string
     */
    static getFunctionContent(fn: Function): string;
    /**
     * @param {string} str the string converted to identifier
     * @returns {string} created identifier
     */
    static toIdentifier(str: string): string;
    /**
     *
     * @param {string} str string to be converted to commented in bundle code
     * @returns {string} returns a commented version of string
     */
    static toComment(str: string): string;
    /**
     *
     * @param {string} str string to be converted to "normal comment"
     * @returns {string} returns a commented version of string
     */
    static toNormalComment(str: string): string;
    /**
     * @param {string} str string path to be normalized
     * @returns {string} normalized bundle-safe path
     */
    static toPath(str: string): string;
    /**
     *
     * @param {number} n number to convert to ident
     * @returns {string} returns single character ident
     */
    static numberToIdentifer(n: number): string;
    /**
     *
     * @param {string | string[]} s string to convert to identity
     * @returns {string} converted identity
     */
    static indent(s: string | string[]): string;
    /**
     *
     * @param {string|string[]} s string to create prefix for
     * @param {string} prefix prefix to compose
     * @returns {string} returns new prefix string
     */
    static prefix(s: string | string[], prefix: string): string;
    /**
     *
     * @param {string|string[]} str string or string collection
     * @returns {string} returns a single string from array
     */
    static asString(str: string | string[]): string;
    /**
     * @typedef {Object} WithId
     * @property {string|number} id
     */
    /**
     * @param {WithId[]} modules a collection of modules to get array bounds for
     * @returns {[number, number] | false} returns the upper and lower array bounds
     * or false if not every module has a number based id
     */
    static getModulesArrayBounds(modules: {
        id: string | number;
    }[]): [number, number] | false;
    /**
     * @param {Chunk} chunk chunk whose modules will be rendered
     * @param {ModuleFilterPredicate} filterFn function used to filter modules from chunk to render
     * @param {ModuleTemplate} moduleTemplate ModuleTemplate instance used to render modules
     * @param {TODO | TODO[]} dependencyTemplates templates needed for each module to render dependencies
     * @param {string=} prefix applying prefix strings
     * @returns {ConcatSource} rendered chunk modules in a Source object
     */
    static renderChunkModules(chunk: Chunk, filterFn: ModuleFilterPredicate, moduleTemplate: ModuleTemplate, dependencyTemplates: any | any[], prefix?: string | undefined): import("../../webpack-sources/lib/ConcatSource");
}
declare namespace Template {
    export { Module, Chunk, ModuleTemplate, ConcatSource, Source, HasId, ModuleFilterPredicate };
}
type Chunk = import("./Chunk");
type ModuleFilterPredicate = (arg0: Module, arg1: number) => boolean;
type ModuleTemplate = import("./ModuleTemplate");
type Module = import("./Module");
type ConcatSource = import("../../webpack-sources/lib/ConcatSource");
type Source = import("../../webpack-sources/lib/Source");
type HasId = {
    id: number | string;
};
