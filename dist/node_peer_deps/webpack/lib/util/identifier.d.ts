export function makePathsRelative(context: string, identifier: string, cache?: MakeRelativePathsCache | undefined): string;
export function contextify(context: string, request: string): string;
/**
 * @param {string} context absolute context path
 * @param {string} request any request string
 * @returns {string} a new request string using absolute paths when possible
 */
export function absolutify(context: string, request: string): string;
export type MakeRelativePathsCache = {
    relativePaths?: Map<string, Map<string, string>> | undefined;
};
