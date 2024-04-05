var cacheName = 'DataComics+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/bootstrap.min.css',

        './assets/js/bootstrap.min.js',

        './assets/js/jquery.min.js',

        './assets/js/popper.min.js',

        './img/background.png',
        './img/favicon.png',
        './img/logo.png',
        './img/icon_29.png',
        './img/icon_40.png',
        './/img/icon_57.png',
        './img/icon_58.png',
        './img/icon_60.png',
        './img/icon_80.png',
        './img/icon_87.png',
        './img/icon_114.png',
        './img/icon_120.png',
        './img/icon_180.png',
        './img/icon_1024.png',
        './img/formulas.JPG',

        './assets/img/batman.jpeg',
        './assets/img/chefao.jpeg',
        './assets/img/leao.jpeg',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});