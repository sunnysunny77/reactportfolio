const KEY = 'key';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('message', (event) => {
  if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(KEY)
        .then((cache) => {
          return cache.addAll(event.data.payload);
        })
    );
  }
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        //we found an entry in the cache!
        return response
      }
      return fetch(event.request)
    })
  )
})