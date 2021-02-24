export = SplitChunksPlugin;
declare class SplitChunksPlugin {
    static normalizeOptions(options?: {}): {
        chunksFilter: any;
        minSize: any;
        enforceSizeThreshold: any;
        maxSize: any;
        minChunks: any;
        maxAsyncRequests: any;
        maxInitialRequests: any;
        hidePathInfo: any;
        filename: any;
        getCacheGroups: any;
        automaticNameDelimiter: any;
        automaticNameMaxLength: any;
        fallbackCacheGroup: {
            minSize: any;
            maxSize: any;
            automaticNameDelimiter: any;
        };
    };
    static normalizeName({ name, automaticNameDelimiter, automaticNamePrefix, automaticNameMaxLength }: {
        name: any;
        automaticNameDelimiter: any;
        automaticNamePrefix: any;
        automaticNameMaxLength: any;
    }): any;
    static normalizeChunksFilter(chunks: any): any;
    static normalizeFallbackCacheGroup({ minSize, maxSize, automaticNameDelimiter }: {
        minSize?: any;
        maxSize?: any;
        automaticNameDelimiter?: any;
    }, { minSize: defaultMinSize, maxSize: defaultMaxSize, automaticNameDelimiter: defaultAutomaticNameDelimiter }: {
        minSize?: any;
        maxSize?: any;
        automaticNameDelimiter?: any;
    }): {
        minSize: any;
        maxSize: any;
        automaticNameDelimiter: any;
    };
    static normalizeCacheGroups({ cacheGroups, name, automaticNameDelimiter, automaticNameMaxLength }: {
        cacheGroups: any;
        name: any;
        automaticNameDelimiter: any;
        automaticNameMaxLength: any;
    }): any;
    static checkTest(test: any, module: any): any;
    constructor(options: any);
    options: {
        chunksFilter: any;
        minSize: any;
        enforceSizeThreshold: any;
        maxSize: any;
        minChunks: any;
        maxAsyncRequests: any;
        maxInitialRequests: any;
        hidePathInfo: any;
        filename: any;
        getCacheGroups: any;
        automaticNameDelimiter: any;
        automaticNameMaxLength: any;
        fallbackCacheGroup: {
            minSize: any;
            maxSize: any;
            automaticNameDelimiter: any;
        };
    };
    /**
     * @param {Compiler} compiler webpack compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace SplitChunksPlugin {
    export { Compiler, Chunk, Module, DeterministicGroupingOptionsForModule, DeterministicGroupingGroupedItemsForModule };
}
type Compiler = import("../Compiler");
type Chunk = import("../Chunk");
type Module = import("../Module");
type DeterministicGroupingOptionsForModule = {
    /**
     * maximum size of a group
     */
    maxSize: number;
    /**
     * minimum size of a group (preferred over maximum size)
     */
    minSize: number;
    /**
     * a list of items
     */
    items: Iterable<import("../Module")>;
    /**
     * function to get size of an item
     */
    getSize: (arg0: import("../Module")) => number;
    /**
     * function to get the key of an item
     */
    getKey: (arg0: import("../Module")) => string;
};
type DeterministicGroupingGroupedItemsForModule = {
    key: string;
    items: import("../Module")[];
    size: number;
};
