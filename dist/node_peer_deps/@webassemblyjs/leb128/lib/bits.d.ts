export var __esModule: boolean;
export function extract(buffer: any, bitIndex: any, bitLength: any, defaultBit: any): number;
/**
 * Injects the given bits into the given buffer at the given index. Any
 * bits in the value beyond the length to set are ignored.
 */
export function inject(buffer: any, bitIndex: any, bitLength: any, value: any): void;
/**
 * Gets the sign bit of the given buffer.
 */
export function getSign(buffer: any): number;
/**
 * Gets the zero-based bit number of the highest-order bit with the
 * given value in the given buffer.
 *
 * If the buffer consists entirely of the other bit value, then this returns
 * `-1`.
 */
export function highOrder(bit: any, buffer: any): number;
