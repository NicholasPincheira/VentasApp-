// serviceworker.js

const CACHE_NAME = "ventasApp-v1";
const urlsToCache = [
  "/",
  "/static/css/global.css",
  "/static/js/script.js",
  "/static/img/logo.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error("Error al cachear los recursos:", error);
      })
  );
});

// Interceptar solicitudes de red
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Devuelve los recursos del caché si están disponibles, de lo contrario, realiza una solicitud de red
      return response || fetch(event.request);
    })
  );
});

// Actualizar el caché cuando el Service Worker cambia
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
