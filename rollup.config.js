import path from 'path'
import typescript from '@rollup/plugin-typescript'
import * as pluginNodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const resolve = (p) => path.resolve(__dirname, p)

export default {
  input: path.resolve(process.cwd(), 'src/index.ts'),
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'types',
    }),
    pluginNodeResolve.nodeResolve(),
    commonjs(),
    terser({
      output: {
        comments: true,
      },
    }),
  ],
}
