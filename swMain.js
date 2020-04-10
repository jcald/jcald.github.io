console.log("sw.js");

self.addEventListener("fetch", (event) => {
  console.log('url: ', event.request.url);
  // if (event.request.url.includes("style.css")) {
  //   event.respondWith(null);
  //   // console.log('   Despues respondWidth null');
  // } else {
  //   event.respondWith( fetch( event.request ));
  //   console.log('   Despues respondWidth con fetch');
  // }
});

// addEventListener('fetch', event => {
//     // Prevent the default, and handle the request ourselves.
//     event.respondWith(async function() {
//       // Intenta obtener la respuesta de un caché.
//       const cachedResponse = await caches.match(event.request);
//       // Devuélvelo si encontramos uno.
//       if (cachedResponse) return cachedResponse;
//       // Si no encontramos una coincidencia en el caché, use la red.
//       return fetch(event.request);
//     }());
//   });

// self.addEventListener("fetch", (event) => {
//   if (event.request.url.includes("style.css")) {
//       // con esto se anula la carga de styles.css
//     event.respondWith(null);
//   } else {
//     event.respondWith(fetch(event.request));
//   }
// });
// =================================== lo de arriba OK

// // Ciclo de vida del SW

// // Instalación del service worker
// self.addEventListener('install', event => {

//     // Usualmente se almacena en cache
//     // los recursos de nuestra aplicación
//     // console.log('SW: Instalando....');
//     // console.log(event);

//     const instalacion = new Promise( (resolve, reject) => {

//         console.log('SW: Empezando instalación');

//         setTimeout( ()=> {
//             console.log('SW: Proceso de instalación terminado!!!');

//             // Podemos saltar la espera con este comando
//             self.skipWaiting();
//             resolve();
//         }, 10 ); //1500

//     });

//     event.waitUntil( instalacion );

// });

// // Cuando el service worker toma el control de la aplicación
// self.addEventListener('activate', event => {

//     console.log('SW: Activo y listo para controlar la aplicación');

// });

// // FETCH: manejo de peticiones http
// self.addEventListener('fetch', event => {

//     // console.log('Realizando petición a:', event.request.url);

// });

// // SYNC: Recuperación de conexión a internet
// self.addEventListener( 'sync', event => {
//     console.log('Tenemos conexión!!!');
//     console.log(event.tag);
// });

// // Notificaciones PUSH
// self.addEventListener('push', event => {

//     console.log('Notificación recibida!!!');

// });
