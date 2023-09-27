self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          '/index.html',
          'static/js/bundle.js'
        ])
      )
  );
});

self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method !== "GET") return;
  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cache = await caches.open("v1");
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        // If we found a match in the cache, return it, but also
        // update the entry in the cache in the background.
        if (navigator.onLine) event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }
      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })()
  );
});
