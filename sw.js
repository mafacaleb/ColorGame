self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('colores-app-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './rojo.mp3',
        './azul.mp3',
        './verde.mp3',
        './amarillo.mp3',
        './naranja.mp3',
        './rosa.mp3',
        './negro.mp3',
        './blanco.mp3',
        './morado.mp3'
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