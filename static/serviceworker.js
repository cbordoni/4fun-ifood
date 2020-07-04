var cacheName = '$APP_VERSION';
var baseURL = location.origin;

var cacheURLs = [baseURL + '/', $FILES_URL];

self.addEventListener('install', function (e) {
	// Perform install steps
	e.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(cacheURLs)));
});

self.addEventListener('fetch', function (e) {
	e.respondWith(
		caches.match(e.request).then((res) => {
			// Cache hit - return response
			if (res) return res;

			return fetch(e.request);
		})
	);
});
