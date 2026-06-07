const CACHE = 'overland-v4';
// Install — activate immediately
self.addEventListener('install', () => self.skipWaiting());
// Activate — clear any old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
// Fetch — cache-first, update in background, fall back to cache when offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const network = fetch(e.request)
          .then(res => {
            if (res.ok) cache.put(e.request, res.clone());
            return res;
          })
          .catch(() => cached); // offline — serve from cache
        return cached || network;
      })
    )
  );
});
