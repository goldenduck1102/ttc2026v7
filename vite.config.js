import { defineConfig } from 'vite';
import { renderComponents } from './src/components.mjs';
import { optimizeImageMarkup } from './src/image-markup.mjs';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];

function pagesAssetPaths(html) {
  const normalized = html.replace(/(["'\s,])\/assets\//g, '$1./assets/');
  if (!repository) return normalized;
  return normalized.replace(
    /(<meta\b[^>]*property="og:image"[^>]*content=")\.\/assets\//g,
    `$1https://${owner}.github.io/${repository}/assets/`,
  );
}

export default defineConfig({
  base: repository ? `/${repository}/` : '/',
  plugins: [{
    name: 'orchestars-shared-components',
    transformIndexHtml: { order: 'pre', handler: (html) => pagesAssetPaths(optimizeImageMarkup(renderComponents(html))) },
    configureServer(server) {
      for (const path of ['./src/components.mjs', './src/image-manifest.json']) {
        server.watcher.add(new URL(path, import.meta.url).pathname);
      }
    },
    async handleHotUpdate(context) {
      if (['/src/components.mjs', '/src/image-manifest.json'].some(path => context.file.endsWith(path))) {
        // Restart reloads the imported render functions as well as the browser.
        await context.server.restart();
        return [];
      }
    },
  }],
});
