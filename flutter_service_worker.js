'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "843bd5fe094585635a5f6095f4395a07",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/star.png": "adb1853f1ef5e33c6f820628a33035b4",
"/assets/assets/categorie.png": "f7a491025919d56102e0bc4c492cd512",
"/assets/assets/image.png": "1da0ea96e12a817ad4b31038f2918b13",
"/assets/assets/choclate.png": "9fbe19c54bd0dfdbc5e8ec4d3bd130bd",
"/assets/assets/productImage.png": "910b776c9d9aff8d9fe0ec6a97294510",
"/assets/assets/stargrey.png": "c5fd52d4033f1dc9789fcdddd53c1dd4",
"/assets/assets/boxgift.png": "e7ffdf26b3c420ecad9b29b18dedfd0f",
"/assets/assets/illstration.png": "4ad414a7cec4e8dc55e87e845e6bd431",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "50232bc7b47db5cacb61936994b65046",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "b46faa204aef25a64aa053379e93df95",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
