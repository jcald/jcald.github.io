console.log('app.js');


// // Detectar si podemos usar Service Workers
// if ( navigator.serviceWorker ) {
//     navigator.serviceWorker.register('/pwa-basica/sw.js')
//         .then( reg => { // registration
//             // console.log( registration );

//             // Suponer posteo offline
//             setTimeout( () => {
//                 reg.sync.register('posteo-gatitos');
//                 console.log('Se enviaron fotos de gatitos al server!');
//             }, 3000 );

//             // Notification.requestPermission().then( result => {
//             //     console.log(result);
//             //     reg.showNotification('Genial!');
//             // });

//         });
// }

// serviceWorker simple
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('sw.js');
//     });
//   }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        console.log('ServiceWorker registration successful with scope: ', registration);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }