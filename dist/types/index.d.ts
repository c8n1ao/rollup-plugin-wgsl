export default function wgsl(): {
    name: string;
    load(id: string): Promise<string | undefined>;
};
