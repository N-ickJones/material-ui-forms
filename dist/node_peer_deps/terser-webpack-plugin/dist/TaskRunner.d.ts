export var __esModule: boolean;
declare var _default: typeof TaskRunner | undefined;
export default _default;
declare class TaskRunner {
    constructor(options?: {});
    cacheDir: any;
    maxConcurrentWorkers: number;
    run(tasks: any, callback: any): void;
    workers: any;
    boundWorkers: ((options: any, cb: any) => void) | undefined;
    exit(): void;
}
