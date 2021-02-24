export = balanced;
declare function balanced(a: any, b: any, str: any): {
    start: any;
    end: any;
    pre: any;
    body: any;
    post: any;
} | undefined;
declare namespace balanced {
    export { range };
}
declare function range(a: any, b: any, str: any): any[] | undefined;
