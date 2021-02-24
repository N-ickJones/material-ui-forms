export = Queue;
declare function Queue(capacity: any): void;
declare class Queue {
    constructor(capacity: any);
    _capacity: any;
    _length: any;
    _front: any;
    _willBeOverCapacity(size: any): boolean;
    _pushOne(arg: any): void;
    push(fn: any, receiver: any, arg: any): void;
    shift(): any;
    length(): any;
    _checkCapacity(size: any): void;
    _resizeTo(capacity: any): void;
}
