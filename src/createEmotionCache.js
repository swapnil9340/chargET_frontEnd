// src/createEmotionCache.js
import createCache from '@emotion/cache';

// Prepend: true moves MUI styles to the top of the <head> so they're loaded first.
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
