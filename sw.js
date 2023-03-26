// importScripts(
//     'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
//   );
//   workbox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workbox.strategies.CacheFirst()
//   );
const staticChacheName = 'site-static'
const assests = [
  '/',
  '/index.html',
  '/main.js',
  '/styles.css',
  "https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js",
  '/manifest.json',
  '/sw.js',
  '/eraser.png',
  '/minus_sign.png',
  '/plus_sign.webp'
]
self.addEventListener('install',evt=>{
  evt.waitUntil(
  caches.open(staticChacheName).then(cache=>{
    cache.addAll(assests)
  }));
})
self.addEventListener('activate',evt=>{

})

self.addEventListener('fetch',evt=>{
  console.log('fetch event',evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes=>{
      return cacheRes || fetch(evt.request)

    })
  )
})