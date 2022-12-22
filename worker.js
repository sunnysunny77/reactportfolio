self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          '/index/',
          '/about/',
          '/contact/',
          '/skills/',
          '/css/about.css',
          '/css/cont.css',
          '/css/home.css',
          '/css/skills.css',
          '/favicon.ico',
          '/images/about/about.png',
          '/images/about/aboutimg.jpg',
          '/images/contact/contact.png',
          '/images/contact/contimg.jpg',
          '/images/home/acc.jpg',
          '/images/home/bus.jpg',
          '/images/home/candid.jpg',
          '/images/home/equal.png',
          '/images/home/global.png',
          '/images/home/home.png',
          '/images/home/login.jpg',
          '/images/home/next.png',
          '/images/home/pff.jpg',
          '/images/home/port.jpg',
          '/images/home/stick.jpg',
          '/images/home/wp.jpg',
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
          '/images/template/paper-fibers.png',
          '/images/template/textonly.png',
          '/images/template/wave.svg',
          '/images/template/svg.svg',
          '/js/auto.js',
          '/js/cache.js',
          '/js/forms.js',
          '/js/overlay.js',
          '/js/scripts.js',
          '/js/scroll.js',
          '/js/sites.js',
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


addEventListener('fetch', (event) => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith((async () => {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(event.request);
    // Return it if we found one.
    if (cachedResponse) return cachedResponse;
    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  })());
});