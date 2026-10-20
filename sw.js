self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('snap-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
