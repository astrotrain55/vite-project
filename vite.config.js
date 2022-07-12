import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

const PAGES = fs.readdirSync(path.resolve(__dirname))
  .filter((fileName) => fileName.endsWith('.html'))
  .map((fileName) => path.resolve(__dirname, fileName));

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: PAGES,
    },
  },
  plugins: [pugPlugin({}, {
    menu: JSON.parse(fs.readFileSync('./src/markup/data/menu.json', 'utf8')),
    content: JSON.parse(fs.readFileSync('./src/markup/data/content.json', 'utf8')),
  })],
});
