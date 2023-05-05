import { readFile } from 'node:fs/promises'

type FileTypes = 'frag' | 'vert' | 'wgsl' | 'glsl'

interface Options {
  fileTypes: FileTypes[]
}

export default function wgsl(options?: Options) {
  options = {
    ...{ fileTypes: ['frag', 'vert', 'wgsl', 'glsl'] },
    ...options,
  } as Options

  return {
    name: 'wgsl',

    async load(id: string) {
      const isTargetSuffix = options!.fileTypes.some((type) =>
        id.endsWith(`.${type}`)
      )

      if (isTargetSuffix) {
        const code = await readFile(id, 'utf-8')
        return `export default ${JSON.stringify(code)};`
      }
    },
  }
}
