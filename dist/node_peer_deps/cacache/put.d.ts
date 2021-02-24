export = putData;
declare function putData(cache: any, key: any, data: any, opts?: {}): any;
declare namespace putData {
    export { putStream as stream };
}
declare function putStream(cache: any, key: any, opts?: {}): import("../minipass-pipeline");
