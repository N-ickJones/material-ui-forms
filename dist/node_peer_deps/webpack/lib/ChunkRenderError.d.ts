export = ChunkRenderError;
declare const ChunkRenderError_base: typeof import("./WebpackError");
/** @typedef {import("./Chunk")} Chunk */
declare class ChunkRenderError extends ChunkRenderError_base {
    /**
     * Create a new ChunkRenderError
     * @param {Chunk} chunk A chunk
     * @param {string} file Related file
     * @param {Error} error Original error
     */
    constructor(chunk: Chunk, file: string, error: Error);
    error: Error;
    file: string;
    chunk: import("./Chunk");
}
declare namespace ChunkRenderError {
    export { Chunk };
}
type Chunk = import("./Chunk");
