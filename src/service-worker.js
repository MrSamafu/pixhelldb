self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pixhellfest-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/styles.css',
                '/app.js',
                '/icons/icon-192x192.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
