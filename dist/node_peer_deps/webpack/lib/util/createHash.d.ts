export var Hash: typeof Hash;
declare function _exports(algorithm: string | HashConstructor): Hash;
declare namespace _exports {
    export { Hash, HashConstructor };
}
export = _exports;
export type HashConstructor = typeof Hash;
declare class Hash {
    /**
     * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
     * @param {string|Buffer} data data
     * @param {string=} inputEncoding data encoding
     * @returns {this} updated hash
     */
    update(data: string | any, inputEncoding?: string | undefined): this;
    /**
     * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
     * @param {string=} encoding encoding of the return value
     * @returns {string|Buffer} digest
     */
    digest(encoding?: string | undefined): string | any;
}
