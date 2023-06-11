self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          '/about.html',
          '/contact.html',
          '/skills.html',
          '/css/app.css',
          '/css/Poppins-Regular.ttf',
          '/favicon.ico',
          '/images/about/about.png',
          '/images/about/aboutimg.jpg',
          '/images/contact/contact.png',
          '/images/contact/contimg.jpg',
          '/images/home/home.png',
          '/images/home/global.png',
          '/images/home/next.png',
          '/images/home/wp.jpg',
          '/images/home/fas.jpg',
          '/images/home/stick.jpg',
          '/images/home/port.jpg',
          '/images/home/news.jpg',
          '/images/home/login.jpg',
          '/images/home/furniture.jpg',
          '/images/home/dave.jpg',
          '/images/home/candid.jpg',
          '/images/home/bus.jpg',
          '/images/skills/angular.png',
          '/images/skills/apache.png',
          '/images/skills/boot.png',
          '/images/skills/cloud.png',
          '/images/skills/foundation.png',
          '/images/skills/git.png',
          '/images/skills/htmlcssjs.png',
          '/images/skills/mongo.png',
          '/images/skills/mvc.png',
          '/images/skills/nginx.png',
          '/images/skills/nodejs.png',
          '/images/skills/oop.png',
          '/images/skills/photoshop.png',
          '/images/skills/php.png',
          '/images/skills/react.png',
          '/images/skills/sass.png',
          '/images/skills/silverstripe.png',
          '/images/skills/skills.png',
          '/images/skills/skillsimg.jpg',
          '/images/skills/sql.png',
          '/images/skills/ubuntu.png',
          '/images/skills/ux.png',
          '/images/skills/wordpress.png',
          '/images/skills/xml.png',
          '/images/template/div1.png',
          '/images/template/global192.png',
          '/images/template/handmade-paper.png',
          '/images/template/menu.png',
          '/images/template/natural-paper.png',
          '/images/template/textonly.svg',
          '/images/template/wave.svg',
          '/images/template/logo-main-underline.png',
          '/images/template/equal.png',
          '/js/auto.js',
          '/js/cache.js',
          '/js/forms.js',
          '/js/overlay.js',
          '/js/scripts.js',
          '/js/scroll.js',
          '/js/sites.js',
          '/js/sw.js',
          '/js/template.js',
          '/js/utilities.js',
          '/manifest.json',
          '/node_modules/overlayscrollbars/css/OverlayScrollbars.css',
          '/node_modules/overlayscrollbars/js/OverlayScrollbars.js',
          '/node_modules/vivus/dist/vivus.min.js'
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
