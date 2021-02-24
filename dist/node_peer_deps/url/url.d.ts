export function parse(url: any, parseQueryString: any, slashesDenoteHost: any): Url;
export function resolve(source: any, relative: any): string;
export function resolveObject(source: any, relative: any): any;
export function format(obj: any): any;
export var Url: typeof Url;
declare function Url(): void;
declare class Url {
    protocol: any;
    slashes: boolean | null;
    auth: string | null;
    host: any;
    port: any;
    hostname: any;
    hash: any;
    search: any;
    query: any;
    pathname: any;
    path: any;
    href: any;
    parse(url: any, parseQueryString: any, slashesDenoteHost: any): Url;
    format(): string;
    resolve(relative: any): string;
    resolveObject(relative: any): Url;
    parseHost(): void;
}
export {};
