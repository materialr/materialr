const CONFIG = {
  CACHE_NAME: '0.0.1',
  CACHE_URLS: [
    '/',
    '/assets/favicon.png',
    '/assets/favicon-inverted.png',
    '/bundle.js',
    '/index.html',
    '/vendor.js',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
  ],
  CACHE_URLS_IMMUTABLE: [],
};

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', event =>
  event.waitUntil(
    caches.open(CONFIG.CACHE_NAME).then((cache) => {
      let immutableNotCached = [];
      return Promise.all(
        CONFIG.CACHE_URLS_IMMUTABLE.map(immutableUrl =>
          caches.match(immutableUrl).then((immutableResponse) => {
            if (immutableResponse) {
              return cache.put(immutableUrl, immutableResponse);
            }
            immutableNotCached = [...immutableNotCached, immutableUrl];
            return Promise.resolve();
          })),
      ).then(() => cache.addAll([...immutableNotCached, ...CONFIG.CACHE_URLS]));
    }),
  ));

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event =>
  event.respondWith(
    caches.open(CONFIG.CACHE_NAME).then(cache =>
      cache.match(event.request).then(
        response =>
          response ||
          fetch(event.request).then((fetchResponse) => {
            const { url } = event.request;
            if (!url.includes('sock-js')) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          }),
      )),
  ));

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', event =>
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(
            cacheName => (cacheName !== CONFIG.CACHE_NAME ? caches.delete(cacheName) : undefined),
          ),
        )),
  ));
