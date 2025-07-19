
const CACHE_NAME = 'todo-pwa-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/icon.png',
    'https://cdn.tailwindcss.com'
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.error('Cache open failed:', err))
    );
});

// Cache and return requests with fallback
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).catch(() => {
                    return caches.match('/index.html'); // Fallback to index.html for failed requests
                });
            })
    );
});

// Update Service Worker
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Handle push notifications
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : { title: 'Todo Update', body: 'Check your todo list!' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: '/icon.png'
        })
    );
});
