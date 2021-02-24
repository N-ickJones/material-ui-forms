export var __esModule: boolean;
/**
 * Allocates a buffer of the given length, which is initialized
 * with all zeroes. This returns a buffer from the pool if it is
 * available, or a freshly-allocated buffer if not.
 */
export function alloc(length: any): any;
/**
 * Releases a buffer back to the pool.
 */
export function free(buffer: any): void;
/**
 * Resizes a buffer, returning a new buffer. Returns the argument if
 * the length wouldn't actually change. This function is only safe to
 * use if the given buffer was allocated within this module (since
 * otherwise the buffer might possibly be shared externally).
 */
export function resize(buffer: any, length: any): any;
/**
 * Reads an arbitrary signed int from a buffer.
 */
export function readInt(buffer: any): {
    value: number;
    lossy: boolean;
};
/**
 * Reads an arbitrary unsigned int from a buffer.
 */
export function readUInt(buffer: any): {
    value: number;
    lossy: boolean;
};
/**
 * Writes a little-endian 64-bit signed int into a buffer.
 */
export function writeInt64(value: any, buffer: any): void;
/**
 * Writes a little-endian 64-bit unsigned int into a buffer.
 */
export function writeUInt64(value: any, buffer: any): void;
