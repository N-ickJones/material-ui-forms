export = AssetsOverSizeLimitWarning;
declare const AssetsOverSizeLimitWarning_base: typeof import("../WebpackError");
declare class AssetsOverSizeLimitWarning extends AssetsOverSizeLimitWarning_base {
    constructor(assetsOverSizeLimit: any, assetLimit: any);
    assets: any;
}
