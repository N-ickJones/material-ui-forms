export = RuntimeTemplate;
declare class RuntimeTemplate {
    constructor(outputOptions: any, requestShortener: any);
    outputOptions: any;
    requestShortener: any;
    /**
     * Add a comment
     * @param {object} options Information content of the comment
     * @param {string=} options.request request string used originally
     * @param {string=} options.chunkName name of the chunk referenced
     * @param {string=} options.chunkReason reason information of the chunk
     * @param {string=} options.message additional message
     * @param {string=} options.exportName name of the export
     * @returns {string} comment
     */
    comment({ request, chunkName, chunkReason, message, exportName }: {
        request?: string | undefined;
        chunkName?: string | undefined;
        chunkReason?: string | undefined;
        message?: string | undefined;
        exportName?: string | undefined;
    }): string;
    throwMissingModuleErrorFunction({ request }: {
        request: any;
    }): string;
    missingModule({ request }: {
        request: any;
    }): string;
    missingModuleStatement({ request }: {
        request: any;
    }): string;
    missingModulePromise({ request }: {
        request: any;
    }): string;
    moduleId({ module, request }: {
        module: any;
        request: any;
    }): string;
    moduleRaw({ module, request }: {
        module: any;
        request: any;
    }): string;
    moduleExports({ module, request }: {
        module: any;
        request: any;
    }): string;
    moduleNamespace({ module, request, strict }: {
        module: any;
        request: any;
        strict: any;
    }): string;
    moduleNamespacePromise({ block, module, request, message, strict, weak }: {
        block: any;
        module: any;
        request: any;
        message: any;
        strict: any;
        weak: any;
    }): string;
    /**
     *
     * @param {Object} options options object
     * @param {boolean=} options.update whether a new variable should be created or the existing one updated
     * @param {Module} options.module the module
     * @param {string} options.request the request that should be printed as comment
     * @param {string} options.importVar name of the import variable
     * @param {Module} options.originModule module in which the statement is emitted
     * @returns {string} the import statement
     */
    importStatement({ update, module, request, importVar, originModule }: {
        update?: boolean | undefined;
        module: Module;
        request: string;
        importVar: string;
        originModule: Module;
    }): string;
    exportFromImport({ module, request, exportName, originModule, asiSafe, isCall, callContext, importVar }: {
        module: any;
        request: any;
        exportName: any;
        originModule: any;
        asiSafe: any;
        isCall: any;
        callContext: any;
        importVar: any;
    }): any;
    blockPromise({ block, message }: {
        block: any;
        message: any;
    }): string;
    onError(): string;
    defineEsModuleFlagStatement({ exportsArgument }: {
        exportsArgument: any;
    }): string;
}
declare namespace RuntimeTemplate {
    export { Module };
}
type Module = import("./Module");
