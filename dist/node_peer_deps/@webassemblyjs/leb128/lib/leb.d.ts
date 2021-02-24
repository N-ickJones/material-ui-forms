export var __esModule: boolean;
declare var _default: {
    decodeInt32: typeof decodeInt32;
    decodeInt64: typeof decodeInt64;
    decodeIntBuffer: typeof decodeIntBuffer;
    decodeUInt32: typeof decodeUInt32;
    decodeUInt64: typeof decodeUInt64;
    decodeUIntBuffer: typeof decodeUIntBuffer;
    encodeInt32: typeof encodeInt32;
    encodeInt64: typeof encodeInt64;
    encodeIntBuffer: typeof encodeIntBuffer;
    encodeUInt32: typeof encodeUInt32;
    encodeUInt64: typeof encodeUInt64;
    encodeUIntBuffer: typeof encodeUIntBuffer;
} | undefined;
export default _default;
declare function decodeInt32(encodedBuffer: any, index: any): {
    value: any;
    nextIndex: any;
};
declare function decodeInt64(encodedBuffer: any, index: any): {
    value: any;
    nextIndex: any;
    lossy: boolean;
};
declare function decodeIntBuffer(encodedBuffer: any, index: any): {
    value: any;
    nextIndex: any;
};
declare function decodeUInt32(encodedBuffer: any, index: any): {
    value: any;
    nextIndex: any;
};
declare function decodeUInt64(encodedBuffer: any, index: any): {
    value: any;
    nextIndex: any;
    lossy: boolean;
};
declare function decodeUIntBuffer(encodedBuffer: any, index: any): {
    value: any;
    nextIndex: any;
};
declare function encodeInt32(num: any): any;
declare function encodeInt64(num: any): any;
declare function encodeIntBuffer(buffer: any): any;
declare function encodeUInt32(num: any): any;
declare function encodeUInt64(num: any): any;
declare function encodeUIntBuffer(buffer: any): any;
