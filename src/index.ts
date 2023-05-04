import { readFile } from 'node:fs/promises'

export default function wgsl() {
  return {
    name: 'wgsl',

    async load(id: string) {
      if (id.endsWith('.wgsl')) {
        const code = await readFile(id, 'utf-8')
        return `export default ${JSON.stringify(code)};`
      }
    },
  }
}
