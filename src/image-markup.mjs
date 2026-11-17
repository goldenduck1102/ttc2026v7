import { readFileSync } from 'node:fs';

const images = JSON.parse(readFileSync(new URL('./image-manifest.json', import.meta.url), 'utf8'));
const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/** Emit responsive, dimensioned images at build time; no image library in the client. */
export function optimizeImageMarkup(html) {
  return html.replace(/<img\b[^>]*>/g, tag => {
    const source = tag.match(/\bsrc="([^"]+)"/)?.[1];
    const image = images[source];
    if (!image) return tag;
    const srcset = image.variants.map(item => `${item.src} ${item.width}w`).join(', ');
    let rendered = tag
      .replace(/\s(?:width|height|decoding|srcset|sizes)="[^"]*"/g, '')
      .replace(`src="${source}"`, `src="${image.src}"`)
      .replace(/>$/, ` width="${image.width}" height="${image.height}" decoding="async" srcset="${srcset}" sizes="${image.sizes}">`);
    if (!/loading="lazy"/.test(rendered)) return rendered;
    const deferred = rendered.replace('src="', 'data-src="').replace('srcset="', 'data-srcset="').replace(/>$/, ` src="${placeholder}" data-deferred-image>`);
    // With scripting disabled, the real image still loads and keeps its alt text.
    return deferred + `<noscript>${rendered}</noscript>`;
  }).replace(/\b(href|data-gallery-src)="(\/assets\/[^\"]+)"/g, (attribute, name, source) => {
    const image = images[source];
    if (!image) return attribute;
    if (name === 'href') return `${name}="${image.src}"`;
    const srcset = image.variants.map(item => `${item.src} ${item.width}w`).join(', ');
    const heightLimit = (80 * image.width / image.height).toFixed(2);
    return `${name}="${image.src}" data-gallery-srcset="${srcset}" data-gallery-sizes="min(1400px, 94vw, ${heightLimit}vh)"`;
  });
}
