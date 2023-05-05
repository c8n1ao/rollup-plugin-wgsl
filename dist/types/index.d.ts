type FileTypes = 'frag' | 'vert' | 'wgsl' | 'glsl';
interface Options {
    fileTypes: FileTypes[];
}
export default function wgsl(options?: Options): {
    name: string;
    load(id: string): Promise<string | undefined>;
};
export {};
