export = buildChunkGraph;
/**
 * This method creates the Chunk graph from the Module graph
 * @param {Compilation} compilation the compilation
 * @param {Entrypoint[]} inputChunkGroups chunk groups which are processed
 * @returns {void}
 */
declare function buildChunkGraph(compilation: Compilation, inputChunkGroups: Entrypoint[]): void;
declare namespace buildChunkGraph {
    export { AsyncDependenciesBlock, Chunk, ChunkGroup, Compilation, DependenciesBlock, Dependency, Entrypoint, Module, QueueItem, ChunkGroupInfo, ChunkGroupDep };
}
type Compilation = import("./Compilation");
type Entrypoint = import("./Entrypoint");
type AsyncDependenciesBlock = import("./AsyncDependenciesBlock");
type Chunk = import("./Chunk");
type ChunkGroup = import("./ChunkGroup");
type DependenciesBlock = import("./DependenciesBlock");
type Dependency = import("./Dependency");
type Module = import("./Module");
type QueueItem = {
    action: number;
    block: DependenciesBlock;
    module: Module;
    chunk: Chunk;
    chunkGroup: ChunkGroup;
};
type ChunkGroupInfo = {
    /**
     * the chunk group
     */
    chunkGroup: ChunkGroup;
    /**
     * current minimal set of modules available at this point
     */
    minAvailableModules: Set<Module>;
    /**
     * true, if minAvailableModules is owned and can be modified
     */
    minAvailableModulesOwned: boolean;
    /**
     * enqueued updates to the minimal set of available modules
     */
    availableModulesToBeMerged: Set<Module>[];
    /**
     * queue items that were skipped because module is already available in parent chunks (need to reconsider when minAvailableModules is shrinking)
     */
    skippedItems: QueueItem[];
    /**
     * set of modules available including modules from this chunk group
     */
    resultingAvailableModules: Set<Module>;
    /**
     * set of children chunk groups, that will be revisited when availableModules shrink
     */
    children: Set<ChunkGroup>;
};
type ChunkGroupDep = {
    /**
     * referencing block
     */
    block: AsyncDependenciesBlock;
    /**
     * referenced chunk group
     */
    chunkGroup: ChunkGroup;
};
