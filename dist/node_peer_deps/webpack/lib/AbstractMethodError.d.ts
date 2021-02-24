export = AbstractMethodError;
declare const AbstractMethodError_base: typeof import("./WebpackError");
/**
 * Error for abstract method
 * @example
 * class FooClass {
 *     abstractMethod() {
 *         throw new AbstractMethodError(); // error message: Abstract method FooClass.abstractMethod. Must be overriden.
 *     }
 * }
 *
 */
declare class AbstractMethodError extends AbstractMethodError_base {
}
