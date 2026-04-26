importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIza...",
  authDomain: "registros-online-brandsen.firebaseapp.com",
  projectId: "registros-online-brandsen",
  messagingSenderId: "352503262598",
  appId: "1:352503262598:web:abfbdb21980685a8b2d007"
});

const messaging = firebase.messaging();

// 🔔 OPCIONAL: mostrar notificación en segundo plano
messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});