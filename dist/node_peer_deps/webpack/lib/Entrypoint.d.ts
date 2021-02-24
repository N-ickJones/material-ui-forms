export = Entrypoint;
declare const Entrypoint_base: typeof import("./ChunkGroup");
/** @typedef {import("./Chunk")} Chunk */
/**
 * Entrypoint serves as an encapsulation primitive for chunks that are
 * a part of a single ChunkGroup. They represent all bundles that need to be loaded for a
 * single instance of a page. Multi-page application architectures will typically yield multiple Entrypoint objects
 * inside of the compilation, whereas a Single Page App may only contain one with many lazy-loaded chunks.
 */
declare class Entrypoint extends Entrypoint_base {
    /**
     * Creates an instance of Entrypoint.
     * @param {string} name the name of the entrypoint
     */
    constructor(name: string);
    /** @type {Chunk=} */
    runtimeChunk: Chunk | undefined;
    /**
     * Sets the runtimeChunk for an entrypoint.
     * @param {Chunk} chunk the chunk being set as the runtime chunk.
     * @returns {void}
     */
    setRuntimeChunk(chunk: Chunk): void;
    /**
     * Fetches the chunk reference containing the webpack bootstrap code
     * @returns {Chunk} returns the runtime chunk or first chunk in `this.chunks`
     */
    getRuntimeChunk(): Chunk;
}
declare namespace Entrypoint {
    export { Chunk };
}
type Chunk = import("./Chunk");
