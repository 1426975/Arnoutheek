const CACHE_NAME = 'arnoutheek-cache-v1';

// This tells the browser to install the service worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// This tells the browser to use cached files if there's no internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});