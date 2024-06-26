self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('mpwa-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/gallery.html',
                '/styles.css',
                '/main.js',
                '/manifest.json',
                '/images/honda-rebel-500.jpg',
                '/images/honda-cb500x.jpg',
                '/images/yamaha-mt-07.jpg',
                '/images/z1.jpg',
                '/images/z2.jpg',
                '/images/z3.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
