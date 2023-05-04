const fs = require('fs-extra')

module.exports = function wgsl() {
  return {
    name: 'wgsl',

    async load(id) {
      if (id.endsWith('.wgsl')) {
        const code = await fs.readFile(id, 'utf-8')
        return `export default ${JSON.stringify(code)};`
      }
    },
  }
}
