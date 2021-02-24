/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGroup")} ChunkGroup */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./AsyncDependenciesBlock")} AsyncDependenciesBlock */
/**
 * @param {ChunkGroup} chunkGroup the ChunkGroup to connect
 * @param {Chunk} chunk chunk to tie to ChunkGroup
 * @returns {void}
 */
export function connectChunkGroupAndChunk(chunkGroup: ChunkGroup, chunk: Chunk): void;
/**
 * @param {ChunkGroup} parent parent ChunkGroup to connect
 * @param {ChunkGroup} child child ChunkGroup to connect
 * @returns {void}
 */
export function connectChunkGroupParentAndChild(parent: ChunkGroup, child: ChunkGroup): void;
/**
 * @param {Chunk} chunk Chunk to connect to Module
 * @param {Module} module Module to connect to Chunk
 * @returns {void}
 */
export function connectChunkAndModule(chunk: Chunk, module: Module): void;
/**
 * @param {Chunk} chunk Chunk being disconnected
 * @param {Module} module Module being disconnected
 * @returns {void}
 */
export function disconnectChunkAndModule(chunk: Chunk, module: Module): void;
/**
 * @param {AsyncDependenciesBlock} depBlock DepBlock being tied to ChunkGroup
 * @param {ChunkGroup} chunkGroup ChunkGroup being tied to DepBlock
 * @returns {void}
 */
export function connectDependenciesBlockAndChunkGroup(depBlock: AsyncDependenciesBlock, chunkGroup: ChunkGroup): void;
export type Chunk = import("./Chunk");
export type ChunkGroup = import("./ChunkGroup");
export type Module = import("./Module");
export type DependenciesBlock = import("./DependenciesBlock");
export type AsyncDependenciesBlock = import("./AsyncDependenciesBlock");
