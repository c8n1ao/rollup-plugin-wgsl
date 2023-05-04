Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const promises_1 = require("node:fs/promises");
function wgsl() {
    return {
        name: 'wgsl',
        load(id) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (id.endsWith('.wgsl')) {
                    const code = yield (0, promises_1.readFile)(id, 'utf-8');
                    return `export default ${JSON.stringify(code)};`;
                }
            });
        },
    };
}
exports.default = wgsl;
