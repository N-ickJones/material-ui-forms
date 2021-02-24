export = mixin;
/**
 * Mixin source map support into `compiler`.
 *
 * @param {Object} `compiler`
 * @api public
 */
declare function mixin(compiler: Object): void;
declare namespace mixin {
    export { updatePosition, emit, addFile, addContent, applySourceMaps, comment };
}
declare function updatePosition(str: string): void;
declare function emit(str: string, node: any): string;
declare function addFile(file: string, position: any): void;
declare function addContent(source: string, position: Object): void;
declare function applySourceMaps(): void;
declare function comment(node: Object): any;
