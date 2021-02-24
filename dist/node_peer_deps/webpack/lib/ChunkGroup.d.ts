export = ChunkGroup;
declare class ChunkGroup {
    /**
     * Creates an instance of ChunkGroup.
     * @param {ChunkGroupOptions=} options chunk group options passed to chunkGroup
     */
    constructor(options?: ChunkGroupOptions | undefined);
    /** @type {number} */
    groupDebugId: number;
    options: string | {
        name: string;
    } | undefined;
    /** @type {SortableSet<ChunkGroup>} */
    _children: import("./util/SortableSet")<import("./ChunkGroup")>;
    _parents: import("./util/SortableSet")<import("./ChunkGroup")>;
    _blocks: import("./util/SortableSet")<any>;
    /** @type {Chunk[]} */
    chunks: Chunk[];
    /** @type {OriginRecord[]} */
    origins: OriginRecord[];
    /** Indices in top-down order */
    /** @private @type {Map<Module, number>} */
    private _moduleIndices;
    /** Indices in bottom-up order */
    /** @private @type {Map<Module, number>} */
    private _moduleIndices2;
    /**
     * when a new chunk is added to a chunkGroup, addingOptions will occur.
     * @param {ChunkGroupOptions} options the chunkGroup options passed to addOptions
     * @returns {void}
     */
    addOptions(options: ChunkGroupOptions): void;
    /**
     * sets a new name for current ChunkGroup
     * @param {string} value the new name for ChunkGroup
     * @returns {void}
     */
    set name(arg: string | undefined);
    /**
     * returns the name of current ChunkGroup
     * @returns {string|undefined} returns the ChunkGroup name
     */
    get name(): string | undefined;
    /**
     * get a uniqueId for ChunkGroup, made up of its member Chunk debugId's
     * @returns {string} a unique concatenation of chunk debugId's
     */
    get debugId(): string;
    /**
     * get a unique id for ChunkGroup, made up of its member Chunk id's
     * @returns {string} a unique concatenation of chunk ids
     */
    get id(): string;
    /**
     * Performs an unshift of a specific chunk
     * @param {Chunk} chunk chunk being unshifted
     * @returns {boolean} returns true if attempted chunk shift is accepted
     */
    unshiftChunk(chunk: Chunk): boolean;
    /**
     * inserts a chunk before another existing chunk in group
     * @param {Chunk} chunk Chunk being inserted
     * @param {Chunk} before Placeholder/target chunk marking new chunk insertion point
     * @returns {boolean} return true if insertion was successful
     */
    insertChunk(chunk: Chunk, before: Chunk): boolean;
    /**
     * add a chunk into ChunkGroup. Is pushed on or prepended
     * @param {Chunk} chunk chunk being pushed into ChunkGroupS
     * @returns {boolean} returns true if chunk addition was successful.
     */
    pushChunk(chunk: Chunk): boolean;
    /**
     * @param {Chunk} oldChunk chunk to be replaced
     * @param {Chunk} newChunk New chunk that will be replaced with
     * @returns {boolean} returns true if the replacement was successful
     */
    replaceChunk(oldChunk: Chunk, newChunk: Chunk): boolean;
    removeChunk(chunk: any): boolean;
    isInitial(): boolean;
    addChild(chunk: any): boolean;
    getChildren(): import("./ChunkGroup")[];
    getNumberOfChildren(): number;
    get childrenIterable(): import("./util/SortableSet")<import("./ChunkGroup")>;
    removeChild(chunk: any): boolean;
    addParent(parentChunk: any): boolean;
    getParents(): import("./ChunkGroup")[];
    setParents(newParents: any): void;
    getNumberOfParents(): number;
    hasParent(parent: any): boolean;
    get parentsIterable(): import("./util/SortableSet")<import("./ChunkGroup")>;
    removeParent(chunk: any): boolean;
    /**
     * @returns {Array} - an array containing the blocks
     */
    getBlocks(): any[];
    getNumberOfBlocks(): number;
    hasBlock(block: any): boolean;
    get blocksIterable(): import("./util/SortableSet")<any>;
    addBlock(block: any): boolean;
    addOrigin(module: any, loc: any, request: any): void;
    containsModule(module: any): boolean;
    getFiles(): any[];
    /**
     * @param {string=} reason reason for removing ChunkGroup
     * @returns {void}
     */
    remove(reason?: string | undefined): void;
    sortItems(): void;
    /**
     * Sorting predicate which allows current ChunkGroup to be compared against another.
     * Sorting values are based off of number of chunks in ChunkGroup.
     *
     * @param {ChunkGroup} otherGroup the chunkGroup to compare this against
     * @returns {-1|0|1} sort position for comparison
     */
    compareTo(otherGroup: ChunkGroup): -1 | 0 | 1;
    getChildrenByOrders(): any;
    /**
     * Sets the top-down index of a module in this ChunkGroup
     * @param {Module} module module for which the index should be set
     * @param {number} index the index of the module
     * @returns {void}
     */
    setModuleIndex(module: Module, index: number): void;
    /**
     * Gets the top-down index of a module in this ChunkGroup
     * @param {Module} module the module
     * @returns {number} index
     */
    getModuleIndex(module: Module): number;
    /**
     * Sets the bottom-up index of a module in this ChunkGroup
     * @param {Module} module module for which the index should be set
     * @param {number} index the index of the module
     * @returns {void}
     */
    setModuleIndex2(module: Module, index: number): void;
    /**
     * Gets the bottom-up index of a module in this ChunkGroup
     * @param {Module} module the module
     * @returns {number} index
     */
    getModuleIndex2(module: Module): number;
    checkConstraints(): void;
}
declare namespace ChunkGroup {
    export { Chunk, Module, ModuleReason, OriginRecord, ChunkGroupOptions };
}
type Chunk = import("./Chunk");
type OriginRecord = {
    module: Module;
    loc: any;
    request: string;
};
type ChunkGroupOptions = string | {
    name: string;
};
type Module = import("./Module");
type ModuleReason = import("./ModuleReason");
