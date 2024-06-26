import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  outDir: 'lib'
});
