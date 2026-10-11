self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('colores-app-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './rojo.wav',
        './azul.wav',
        './verde.wav',
        './amarillo.wav',
        './naranja.wav',
        './rosa.wav',
        './negro.wav',
        './blanco.wav',
        './morado.wav'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});