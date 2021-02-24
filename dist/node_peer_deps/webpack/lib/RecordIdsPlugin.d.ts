export = RecordIdsPlugin;
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Module")} Module */
/**
 * @typedef {Object} RecordsChunks
 * @property {Record<string, number>=} byName
 * @property {Record<string, number>=} bySource
 * @property {number[]=} usedIds
 */
/**
 * @typedef {Object} RecordsModules
 * @property {Record<string, number>=} byIdentifier
 * @property {Record<string, number>=} bySource
 * @property {Record<number, number>=} usedIds
 */
/**
 * @typedef {Object} Records
 * @property {RecordsChunks=} chunks
 * @property {RecordsModules=} modules
 */
declare class RecordIdsPlugin {
    /**
     * @param {Object} options Options object
     * @param {boolean=} options.portableIds true, when ids need to be portable
     */
    constructor(options: {
        portableIds?: boolean | undefined;
    });
    options: {
        portableIds?: boolean | undefined;
    };
    /**
     * @param {Compiler} compiler the Compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace RecordIdsPlugin {
    export { Compiler, Chunk, Module, RecordsChunks, RecordsModules, Records };
}
type Compiler = import("./Compiler");
type Chunk = import("./Chunk");
type Module = import("./Module");
type RecordsChunks = {
    byName?: Record<string, number> | undefined;
    bySource?: Record<string, number> | undefined;
    usedIds?: number[] | undefined;
};
type RecordsModules = {
    byIdentifier?: Record<string, number> | undefined;
    bySource?: Record<string, number> | undefined;
    usedIds?: Record<number, number> | undefined;
};
type Records = {
    chunks?: RecordsChunks | undefined;
    modules?: RecordsModules | undefined;
};
