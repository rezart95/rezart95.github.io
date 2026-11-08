// Offline cache for the installed site. Bump VERSION whenever shipped files change.
const VERSION = 'v2-2026-11-08';
const CACHE = `rezart-${VERSION}`;
const CORE = [
  './',
  'index.html',
  'styles.css',
  'main.js',
  'favicon.svg',
  'manifest.webmanifest',
  'assets/fonts/Geist.woff2',
  'images/portrait.webp',
  'images/logos/motorola-solutions-on-dark.png',
  'icons/icon-192.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('rezart-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // The home page: network first so updates show up, cache when offline.
  const scopePath = new URL(self.registration.scope).pathname;
  if (request.mode === 'navigate' && (url.pathname === scopePath || url.pathname === scopePath + 'index.html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put('./', copy));
          return response;
        })
        .catch(() => caches.match('./'))
    );
    return;
  }

  // Everything else: serve from cache, refresh in the background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
