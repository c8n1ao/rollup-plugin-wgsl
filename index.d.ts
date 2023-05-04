declare module 'rollup-plugin-wgsl' {
  import type { Plugin } from 'rollup'

  interface Options {
    // 插件选项的类型定义
  }

  function rollupPluginWgsl(options?: Options): Plugin

  export default rollupPluginWgsl
}
