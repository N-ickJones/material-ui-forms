export = JsonpChunkTemplatePlugin;
declare class JsonpChunkTemplatePlugin {
    /**
     * @param {ChunkTemplate} chunkTemplate the chunk template
     * @returns {void}
     */
    apply(chunkTemplate: ChunkTemplate): void;
}
declare namespace JsonpChunkTemplatePlugin {
    export { ChunkTemplate };
}
type ChunkTemplate = import("../ChunkTemplate");
